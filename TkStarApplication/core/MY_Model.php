<?php
class MY_Model extends CI_Model
{
    protected $_table;
    protected $primary_key = 'id';
    protected $before_create = array();
    protected $after_create = array();
    protected $validate = array();
    protected $skip_validation = false;
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('inflector');
        $this->_fetch_table();
    }
    public function __call($method, $arguments)
    {
        $db_method = array($this->db, $method);

        if (is_callable($db_method))
        {
            $result = call_user_func_array($db_method, $arguments);

            if (is_object($result) && $result === $this->db)
            {
                return $this;
            }

            return $result;
        }
        throw new Exception("class '".get_class($this)."' does not have a method '".$method."'");
    }
    public function table_name($prefix = true)
    {
        return $prefix ? $this->db->dbprefix($this->_table) : $this->_table;
    }
    public function set_table_name($name = null)
    {
        return $this->_table = $name;
    }
    public function get($id)
    {
        return $this->db->where($this->primary_key, $id)->get($this->_table)->row();
    }
    public function get_by($key = null, $value = null)
    {
        $where = func_get_args();
        $this->_set_where($where);
        return $this->db->get($this->_table)->row();
    }
    public function get_many($primary_value)
    {
        $this->db->where($this->primary_key, $primary_value);
        return $this->get_all();
    }
    public function get_many_by()
    {
        $where = func_get_args();
        $this->_set_where($where);

        return $this->get_all();
    }
    public function get_all()
    {
        return $this->db->get($this->_table)->result();
    }
    public function count_by()
    {
        $where = func_get_args();
        $this->_set_where($where);

        return $this->db->count_all_results($this->_table);
    }
    public function count_all()
    {
        return $this->db->count_all($this->_table);
    }
    public function insert($data, $skip_validation = false)
    {
        if ($skip_validation === false)
        {
            if ( ! $this->_run_validation($data))
            {
                return false;
            }
        }
        $data = $this->_run_before_create($data);
        $this->db->insert($this->_table, $data);
        $this->_run_after_create($data, $this->db->insert_id());
        $this->skip_validation = false;
        return $this->db->insert_id();
    }
    public function insert_many($data, $skip_validation = false)
    {
        $ids = array();
        foreach ($data as $row)
        {
            if ($skip_validation === false)
            {
                if ( ! $this->_run_validation($row))
                {
                    $ids[] = false;
                    continue;
                }
            }
            $data = $this->_run_before_create($row);
            $this->db->insert($this->_table, $row);
            $this->_run_after_create($row, $this->db->insert_id());
            $ids[] = $this->db->insert_id();
        }
        $this->skip_validation = false;
        return $ids;
    }
    public function update($primary_value, $data, $skip_validation = false)
    {
        if ($skip_validation === false)
        {
            if ( ! $this->_run_validation($data))
            {
                return false;
            }
        }
        $this->skip_validation = false;
        return $this->db->where($this->primary_key, $primary_value)->set($data)->update($this->_table);
    }
    public function update_by()
    {
        $args = func_get_args();
        $data = array_pop($args);
        $this->_set_where($args);
        if (!$this->_run_validation($data))
        {
            return false;
        }
        $this->skip_validation = false;
        return $this->db->set($data)->update($this->_table);
    }
    public function update_many($primary_values, $data, $skip_validation = false)
    {
        if ($skip_validation === false)
        {
            if ( ! $this->_run_validation($data))
            {
                return false;
            }
        }
        $this->skip_validation = false;
        return $this->db->where_in($this->primary_key, $primary_values)->set($data)->update($this->_table);
    }
    public function update_all($data)
    {
        return $this->db->set($data)->update($this->_table);
    }
    public function delete($id)
    {
        return $this->db->where($this->primary_key, $id)->delete($this->_table);
    }
    public function delete_by()
    {
        $where = func_get_args();
        $this->_set_where($where);
        return $this->db->delete($this->_table);
    }
    public function delete_many($primary_values)
    {
        return $this->db->where_in($this->primary_key, $primary_values)
                        ->delete($this->_table);
    }
    function dropdown()
    {
        $args = func_get_args();
        if (count($args) == 2)
        {
            list($key, $value) = $args;
        }
        else
        {
            $key = $this->primary_key;
            $value = $args[0];
        }
        $query = $this->db->select(array($key, $value))->get($this->_table);
        $options = array();
        foreach ($query->result() as $row)
        {
            $options[$row->{$key}] = $row->{$value};
        }
        return $options;
    }
    public function order_by($criteria, $order = 'ASC')
    {
        $this->db->order_by($criteria, $order);
        return $this;
    }
    public function limit($limit, $offset = 0)
    {
        $limit = func_get_args();
        $this->_set_limit($limit);
        return $this;
    }
    public function distinct()
    {
        $this->db->distinct();
        return $this;
    }
    public function validate($data)
    {
        return $this->_run_validation($data);
    }
    public function fields()
    {
        $keys = array();

        if ($this->validate)
        {
            foreach ($this->validate as $key)
            {
                $keys[] = $key['field'];
            }
        }

        return $keys;
    }
    private function _run_before_create($data)
    {
        foreach ($this->before_create as $method)
        {
            $data = call_user_func_array(array($this, $method), array($data));
        }

        return $data;
    }
    private function _run_after_create($data, $id)
    {
        foreach ($this->after_create as $method)
        {
            call_user_func_array(array($this, $method), array($data, $id));
        }
    }
    private function _run_validation($data)
    {
        if ($this->skip_validation)
        {
            return true;
        }
        if (empty($this->validate))
        {
            return true;
        }
        $this->load->library('form_validation');
        if ($class = get_class($this) and $class !== 'MY_Model')
        {
            if (method_exists($this->form_validation, 'set_model'))
            {
                $this->form_validation->set_model($class);
            }
        }
        $this->form_validation->set_data($data);
        if (is_array($this->validate))
        {
            $this->form_validation->set_rules($this->validate);
            return $this->form_validation->run();
        }
        return $this->form_validation->run($this->validate);
    }
    private function _fetch_table()
    {
        if ($this->_table == null)
        {
            $class = preg_replace('/(_m|_model)?$/', '', get_class($this));
            $this->_table = plural(strtolower($class));
        }
    }
    private function _set_where($params)
    {
        if (count($params) == 1)
        {
            $this->db->where($params[0]);
        }
        else
        {
            $this->db->where($params[0], $params[1]);
        }
    }
    private function _set_limit($params)
    {
        if (count($params) == 1)
        {
            if (is_array($params[0]))
            {
                $this->db->limit($params[0][0], $params[0][1]);
            }
            else
            {
                $this->db->limit($params[0]);
            }
        }
        else
        {
            $this->db->limit((int) $params[0], (int) $params[1]);
        }
    }
}
?>