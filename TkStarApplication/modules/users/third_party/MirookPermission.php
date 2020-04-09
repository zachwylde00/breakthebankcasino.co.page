<?php

/**
 * Part of the Sentinel package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the 3-clause BSD License.
 *
 * This source file is subject to the 3-clause BSD License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Sentinel
 * @version    2.0.6
 * @author     Cartalyst LLC
 * @license    BSD License (3-clause)
 * @copyright  (c) 2011-2015, Cartalyst LLC
 * @link       http://cartalyst.com
 */
class MirookPermission {

    use Cartalyst\Sentinel\Permissions\PermissionsTrait;

    /**
     * {@inheritDoc}
     */
    protected function createPreparedPermissions() {
        $prepared = [];

        if (!empty($this->secondaryPermissions)) {
            foreach ($this->secondaryPermissions as $permissions) {
                $this->preparePermissions($prepared, $permissions);
            }
        }

        if (!empty($this->permissions)) {
            $permissions = [];

            $this->preparePermissions($permissions, $this->permissions);

            $prepared = array_merge($prepared, $permissions);
        }

        return $prepared;
    }

    /**
     * This method checks if user have Tree access.
     * Tree access is accesses for Codeigniter HMVC.
     * if {module_name}.{admin/public}.{controller}.{method} exists, it will return it's value(true,false)
     * else it will check {module_name}.{admin/public}.{controller}, {module_name}.{admin/public}
     * if something between like {module_name}.{admin/public}.{controller} passed it will start from this and go back.
     * Note : it do not accept Wildcards.
     * @todo Make it work with wildcards(needs some logic and thinking)
     * @param array|string
     * @return bool
     */
    public function hasAccess($permissions) {
        if (is_string($permissions)) {
            $permissions = func_get_args();
        }

        $prepared = $this->getPreparedPermissions();

        foreach ($permissions as $permission) {
            $accessArray = explode('.', $permission);
            if (count($accessArray) == 1 && !$this->checkPermission($prepared, $permission)) {
                return false;
            } else {
                $access = false;
                for ($i = count($accessArray); $i >= 0; $i--) {
                    $accessString = implode('.', array_slice($accessArray, 0, $i));
                    $permissionResult = $this->checkPermission($prepared, $accessString);
                    if ($permissionResult === false) {
                        return false;
                    } elseif ($permissionResult === true) {
                        $access = true;
                        break;
                    }
                }
                if (!$access) {
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * This method checks if user have Tree access.
     * Tree access is accesses for Codeigniter HMVC.
     * if {module_name}.{admin/public}.{controller}.{method} exists, it will return it's value(true,false)
     * else it will check {module_name}.{admin/public}.{controller}, {module_name}.{admin/public}
     * if something between like {module_name}.{admin/public}.{controller} passed it will start from this and go back.
     * Note : it do not accept Wildcards.
     * @todo Make it work with wildcards(needs some logic and thinking)
     * @param array|string
     * @return bool
     */
    public function hasAnyAccess($permissions) {
        if (is_string($permissions)) {
            $permissions = func_get_args();
        }

        $prepared = $this->getPreparedPermissions();

        foreach ($permissions as $permission) {
            $accessArray = explode('.', $permission);
            if (count($accessArray) == 1 && !$this->checkPermission($prepared, $permission)) {
                return true;
            } else {
                $access = false;
                for ($i = count($accessArray); $i >= 0; $i--) {
                    $accessString = implode('.', array_slice($accessArray, 0, $i));
                    $permissionResult = $this->checkPermission($prepared, $accessString);
                    if ($permissionResult === false) {
                        $access = false;
                        break;
                    } elseif ($permissionResult === true) {
                        return true;
                    }
                }
                if ($access) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Checks a permission in the prepared array, including wildcard checks and permissions.
     *
     * @param  array  $prepared
     * @param  string  $permission
     * @return bool
     */
    protected function checkPermission(array $prepared, $permission) {
        if (array_key_exists($permission, $prepared)) {
            if ($prepared[$permission] === true) {
                return true;
            } else {
                return false;
            }
        }

        foreach ($prepared as $key => $value) {
            if ((str_is($permission, $key) || str_is($key, $permission))) {
                if ($value === true) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        return null;
    }

}
