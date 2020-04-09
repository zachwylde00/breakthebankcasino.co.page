<?php
class MY_Pagination extends CI_Pagination {
    public $per_page = 1;
    public $num_links = 1;
    public $cur_page = 0;
    public $use_page_numbers = FALSE;
    public $first_link = '&lsaquo; First';
    public $next_link = '<i class="uk-icon-angle-double-right"></i>';
    public $prev_link = '<span><i class="uk-icon-angle-double-left"></i></span>';
    public $last_link = 'آخرین';
    public $uri_segment = 3;
    public $full_tag_open = '';
    public $full_tag_close = '';
    public $first_tag_open = '<li>';
    public $first_tag_close = '</li>';
    public $last_tag_open = '<li>';
    public $last_tag_close = '</li>';
    public $first_url = '';
    public $cur_tag_open = '<li class="active"><span style="background-color:#ec4445;border-color:#ec4445">';
    public $cur_tag_close = '</span></li>';
    public $next_tag_open = '<li>';
    public $next_tag_close = '</li>';
    public $prev_tag_open = '<li>';
    public $prev_tag_close = '</li>';
    public $num_tag_open = '<li>';
    public $num_tag_close = '</li>';
    public $page_query_string = FALSE;
    public $query_string_segment = 'per_page';
    public $display_pages = TRUE;
    public $anchor_class = '';
    public function __construct() {
        parent::__construct();
    }
    function create_links() {
        // If our item count or per-page total is zero there is no need to continue.
        if ($this->total_rows == 0 OR $this->per_page == 0) {
            return '';
        }
        $num_pages = ceil($this->total_rows / $this->per_page);
        if ($num_pages == 1) {
            return '';
        }
        if ($this->use_page_numbers) {
            $base_page = 1;
        } else {
            $base_page = 0;
        }
        $CI = & get_instance();
        if ($CI->config->item('enable_query_strings') === TRUE OR $this->page_query_string
                === TRUE) {
            if ($CI->input->get($this->query_string_segment) != $base_page) {
                $this->cur_page = $CI->input->get($this->query_string_segment);
                $this->cur_page = (int) $this->cur_page;
            }
        } else {
            $uri_page_number = $CI->uri->segment($this->uri_segment);
            $uri_page_number = ltrim($uri_page_number, $this->prefix);
            $uri_page_number = rtrim($uri_page_number, $this->suffix);
            if ($uri_page_number != $base_page) {
                $this->cur_page = $uri_page_number;
                $this->cur_page = (int) $this->cur_page;
            }
        }
        if ($this->use_page_numbers AND $this->cur_page == 0) {
            $this->cur_page = $base_page;
        }
        $this->num_links = (int) $this->num_links;
        if ($this->num_links < 1) {
            show_error('Your number of links must be a positive number.');
        }
        if (!is_numeric($this->cur_page)) {
            $this->cur_page = $base_page;
        }
        if ($this->use_page_numbers) {
            if ($this->cur_page > $num_pages) {
                $this->cur_page = $num_pages;
            }
        } else {
            if ($this->cur_page > $this->total_rows) {
                $this->cur_page = ($num_pages - 1) * $this->per_page;
            }
        }
        $uri_page_number = $this->cur_page;
        if (!$this->use_page_numbers) {
            $this->cur_page = floor(($this->cur_page / $this->per_page) + 1);
        }
        $start = (($this->cur_page - $this->num_links) > 0) ? $this->cur_page - ($this->num_links
                - 1) : 1;
        $end = (($this->cur_page + $this->num_links) < $num_pages) ? $this->cur_page
                + $this->num_links : $num_pages;
        if ($CI->config->item('enable_query_strings') === TRUE OR $this->page_query_string
                === TRUE) {
            $this->base_url = rtrim($this->base_url) . '&amp;' . $this->query_string_segment . '=';
        } else {
            $this->base_url = rtrim($this->base_url, '/') . '/';
        }
        $output = '';
        if ($this->first_link !== FALSE AND $this->cur_page > ($this->num_links + 1)) {
            $first_url = ($this->first_url == '') ? $this->base_url : $this->first_url;
            $output .= $this->first_tag_open . '<a ' . $this->anchor_class . 'href="' . $first_url . $this->suffix . '">' . $this->first_link . '</a>' . $this->first_tag_close;
        }
        if ($this->prev_link !== FALSE AND $this->cur_page != 1) {
            if ($this->use_page_numbers) {
                $i = $uri_page_number - 1;
            } else {
                $i = $uri_page_number - $this->per_page;
            }

            if ($i == 0 && $this->first_url != '') {
                $output .= $this->prev_tag_open . '<a ' . $this->anchor_class . 'href="' . $this->first_url . $this->suffix . '">' . $this->prev_link . '</a>' . $this->prev_tag_close;
            } else {
                $i = ($i == 0) ? '' . $this->suffix : $this->prefix . $i . $this->suffix;
                $output .= $this->prev_tag_open . '<a ' . $this->anchor_class . 'href="' . $this->base_url . $i . '">' . $this->prev_link . '</a>' . $this->prev_tag_close;
            }
        }
        if ($this->display_pages !== FALSE) {
            for ($loop = $start - 1; $loop <= $end; $loop++) {
                if ($this->use_page_numbers) {
                    $i = $loop;
                } else {
                    $i = ($loop * $this->per_page) - $this->per_page;
                }
                if ($i >= $base_page) {
                    if ($this->cur_page == $loop) {
                        $output .= $this->cur_tag_open . $loop . $this->cur_tag_close; // Current page
                    } else {
                        $n = ($i == $base_page) ? '' : $i;
                        if ($n == '' && $this->first_url != '') {
                            $output .= $this->num_tag_open . '<a ' . $this->anchor_class . 'href="' . $this->first_url . '">' . $loop . '</a>' . $this->num_tag_close;
                        } else {
                            $n = ($n == '') ? '' . $this->suffix : $this->prefix . $n . $this->suffix;
                            $output .= $this->num_tag_open . '<a ' . $this->anchor_class . 'href="' . $this->base_url . $n . '">' . $loop . '</a>' . $this->num_tag_close;
                        }
                    }
                }
            }
        }
        if ($this->next_link !== FALSE AND $this->cur_page < $num_pages) {
            if ($this->use_page_numbers) {
                $i = $this->cur_page + 1;
            } else {
                $i = ($this->cur_page * $this->per_page);
            }
            $output .= $this->next_tag_open . '<a ' . $this->anchor_class . 'href="' . $this->base_url . $this->prefix . $i . $this->suffix . '">' . $this->next_link . '</a>' . $this->next_tag_close;
        }
        if ($this->last_link !== FALSE AND ( $this->cur_page + $this->num_links)
                < $num_pages) {
            if ($this->use_page_numbers) {
                $i = $num_pages;
            } else {
                $i = (($num_pages * $this->per_page) - $this->per_page);
            }
            $output .= $this->last_tag_open . '<a ' . $this->anchor_class . 'href="' . $this->base_url . $this->prefix . $i . $this->suffix . '">' . $this->last_link . '</a>' . $this->last_tag_close;
        }
        $output = preg_replace("#([^:])//+#", "\\1/", $output);
        $output = $this->full_tag_open . $output . $this->full_tag_close;
        return $output;
    }
}
?>