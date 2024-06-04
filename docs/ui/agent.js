/**
 * @api {post} /saas-zoomview/api/v1/agent Create Agent
 * @apiGroup Agent
 * @apiBody {string} agent_name agent_name of the Agent (Required)
 * @apiBody {string} os os of the Agent (Required)
 * @apiHeader {String} Authorization Bearer token.  
 * @apiParamExample {json} Request-Example:
 * {
    "agent_name":"this is my agent",
    "os":"windows"
   }
 * @apiSuccessExample Success-Response:
{
    "message": {
        "agent_key": "69zcsagt-38uytnme-94908447",
        "agent_id": "658ad8ebaf534ce9286d6f9d",
        "agent_name":"this is my agent",
        "customer_id": "656af7edc0829550fcf9e77b",
        "os":"windows"
    }
}
 */

/**
 * @api {get} /saas-zoomview/api/v1/agent Agent List
 * @apiGroup Agent
 * @apiHeader {String} Authorization Bearer token. 
 * @apiSuccessExample Success-Response:
 {
    "message": [
        {
            "_id": "658a98bdebb6a526a8a230e9",
            "agent_key": "69zcsagt-38yfrpuk-28595547",
            "agent_name":"this is my agent",
            "customer_id": "656af7edc0829550fcf9e77b",
            "os":"windows"
            "createdAt": "2023-12-26T09:11:25.033Z",
            "updatedAt": "2023-12-26T09:43:28.233Z",
            "status": 0,
            "last_checked": null,
            "version": "1.0.0"
        }
    ]
 }
 */

/**
 * @api {put} /saas-zoomview/api/v1/agent/:agent_id Edit Agent
 * @apiGroup Agent
 * @apiBody {string} agent_name agent_name of the Agent (Required)
 * @apiParam {String} agent_id agent_id of the Agent (Required)
 * @apiParamExample {json} Request-Example:
 * {
    "agent_name":"this is my agent",
   } 
* @apiSuccessExample Success-Response:
{
    "message": "updated"
}
 */

/**
 * @api {delete} /saas-zoomview/api/v1/agent/:agent_id Delete Agent
 * @apiGroup Agent
 * @apiParam {String} agent_id agent_id of the Agent (Required)
* @apiSuccessExample Success-Response:
{
    "message": "deleted"
}
 */

/**
 * @api {get} /saas-zoomview/api/v1/agent/:agent_id/generate-key Generate New Agent Key
 * @apiGroup Agent
 * @apiParam {String} agent_id agent_id of the Agent (Required)
* @apiSuccessExample Success-Response:
{
    "message": "new key is generated"
}
 */

/**
 * @api {get} /saas-zoomview/api/v1/agent/:agent_id/download-key Download Agent Key
 * @apiGroup Agent
 * @apiParam {String} agent_id agent_id of the Agent (Required)
* @apiSuccessExample Success-Response:
{
    "message": {
        "public_key": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsAPxPa15qcuT6mysQtdt\nxShc1TiCsQbuJ+Ez0a8n6+kX3OF7QUA9aPiusROB4Jaq4m1SZjure2ywX7wZVA8J\ntv0WHv9b1cb8ngUbaJK1smaEG8T1E+f0w1b/39ipRChch/Vu6c8tiutqVUxG9eLE\nP8wyYvcpCPAN7L1i+Qno5FWKga+iHGMo5KS36WPBKTS2GFh1zBTelFoHYWjbU5dV\nP7EYz4lVvpj/KdkJIePo0ckdSFF6uibe1DIDGpRyE8J5XBD9vLVNZrQcweJqyamO\ncE+2aJDhVhiYYG5xa71B+G9fN6FUKQoVjxddV51ZIbtuHHdGmhQ10ucGBr2EY6E4\n2wIDAQAB\n-----END PUBLIC KEY-----"
    }
}
 */


// **************************************************************************************************


/**
 * @api {get} /saas-zoomview/api/v1/infra/graph/cpu-usages/:host_name/:from/:to CPU Usages Graph
 * @apiGroup CPU-Graph
 * @apiParam {String} host_name host_name of the host (Required)
 * @apiParam {String} from from timestamp (Required)
 * @apiParam {String} to to timestamp (Required)
 * @apiHeader {String} Authorization Bearer token. 
* @apiSuccessExample Success-Response:
{
    "message": [
        {
            "_id": "65bba0203c163b958ce9fbb6",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-01 19:13:02",
            "service_name": "cpu",
            "service_tag": "",
            "__v": 0,
            "ctime": 1706794982023,
            "service_data": {
                "metrix_name": "usage",
                "metrix_value": 0.33,
                "metrix_unit": "%"
            }
        },
        {
            "_id": "65bba03e3c163b958ce9fc55",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-01 19:14:01",
            "service_name": "cpu",
            "service_tag": "",
            "__v": 0,
            "ctime": 1706795041795,
            "service_data": {
                "metrix_name": "usage",
                "metrix_value": 0.17,
                "metrix_unit": "%"
            }
        },
        {
            "_id": "65bba07a3c163b958ce9fd43",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-01 19:15:01",
            "service_name": "cpu",
            "service_tag": "",
            "__v": 0,
            "ctime": 1706795101872,
            "service_data": {
                "metrix_name": "usage",
                "metrix_value": 0.33,
                "metrix_unit": "%"
            }
        }
    ]
}
 */

/**
 * @api {get} /saas-zoomview/api/v1/infra/graph/cpu-load/:host_name/:from/:to CPU Load Graph
 * @apiGroup CPU-Graph
 * @apiParam {String} host_name host_name of the host (Required)
 * @apiParam {String} from from timestamp (Required)
 * @apiParam {String} to to timestamp (Required)
 * @apiHeader {String} Authorization Bearer token. 
* @apiSuccessExample Success-Response:
{
    "message": [
        {
            "_id": "65bba0203c163b958ce9fbb6",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-01 19:13:02",
            "service_name": "cpu",
            "service_tag": "",
            "__v": 0,
            "ctime": 1706794982023,
            "service_data": [
                {
                    "metrix_name": "load_avg_1",
                    "metrix_value": 0.02,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "load_avg_5",
                    "metrix_value": 0.01,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "load_avg_15",
                    "metrix_value": 0,
                    "metrix_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65bba03e3c163b958ce9fc55",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-01 19:14:01",
            "service_name": "cpu",
            "service_tag": "",
            "__v": 0,
            "ctime": 1706795041795,
            "service_data": [
                {
                    "metrix_name": "load_avg_1",
                    "metrix_value": 0,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "load_avg_5",
                    "metrix_value": 0,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "load_avg_15",
                    "metrix_value": 0,
                    "metrix_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65bba07a3c163b958ce9fd43",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-01 19:15:01",
            "service_name": "cpu",
            "service_tag": "",
            "__v": 0,
            "ctime": 1706795101872,
            "service_data": [
                {
                    "metrix_name": "load_avg_1",
                    "metrix_value": 0,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "load_avg_5",
                    "metrix_value": 0,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "load_avg_15",
                    "metrix_value": 0,
                    "metrix_unit": "bytes"
                }
            ]
        }
    ]
}

 */

/**
 * @api {get} /saas-zoomview/api/v1/infra/graph/cpu-thread/:host_name/:from/:to CPU Thread Graph
 * @apiGroup CPU-Graph
 * @apiParam {String} host_name host_name of the host (Required)
 * @apiParam {String} from from timestamp (Required)
 * @apiParam {String} to to timestamp (Required)
 * @apiHeader {String} Authorization Bearer token. 
* @apiSuccessExample Success-Response:
{
    "message": [
        {
            "_id": "65bba0203c163b958ce9fbb6",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-01 19:13:02",
            "service_name": "cpu",
            "service_tag": "",
            "__v": 0,
            "ctime": 1706794982023,
            "service_data": {
                "metrix_name": "os_thread_count",
                "metrix_value": 389,
                "metrix_unit": "count"
            }
        },
        {
            "_id": "65bba03e3c163b958ce9fc55",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-01 19:14:01",
            "service_name": "cpu",
            "service_tag": "",
            "__v": 0,
            "ctime": 1706795041795,
            "service_data": {
                "metrix_name": "os_thread_count",
                "metrix_value": 389,
                "metrix_unit": "count"
            }
        },
        {
            "_id": "65bba07a3c163b958ce9fd43",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-01 19:15:01",
            "service_name": "cpu",
            "service_tag": "",
            "__v": 0,
            "ctime": 1706795101872,
            "service_data": {
                "metrix_name": "os_thread_count",
                "metrix_value": 393,
                "metrix_unit": "count"
            }
        }
    ]
}

 */


// ******************************************************************************************

/**
 * @api {get} /saas-zoomview/api/v1/infra/graph/disk/:host_name/:from/:to Disk Graph
 * @apiGroup Disk-Graph 
 * @apiParam {String} host_name host_name of the host (Required)
 * @apiParam {String} from from timestamp (Required)
 * @apiParam {String} to to timestamp (Required)
 * @apiHeader {String} Authorization Bearer token. 
* @apiSuccessExample Success-Response:
{
    "message": [
        [
            {
                "_id": "65c089aa3c163b958c0e061b",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:39:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707116942052,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c089e63c163b958c0e08b1",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:40:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117002006,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a233c163b958c0e0b41",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:41:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117062049,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a5f3c163b958c0e0de7",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:42:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117122031,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a9b3c163b958c0e108b",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:43:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117182121,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ad73c163b958c0e132e",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:44:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117242291,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b133c163b958c0e1615",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:45:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117302348,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b4f3c163b958c0e185f",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:46:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117362306,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b8b3c163b958c0e1aeb",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:47:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117422346,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08bc73c163b958c0e1d62",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:48:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117482389,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c023c163b958c0e1feb",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:49:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117542471,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c3e3c163b958c0e22c7",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:50:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117601505,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c7a3c163b958c0e2577",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:51:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117661715,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e013c163b958c0e2b1c",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:52:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707117721696,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e1f3c163b958c0e2cd2",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:58:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118082140,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e5b3c163b958c0e2f83",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:59:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118142143,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ed33c163b958c0e336c",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:01:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118262171,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f0f3c163b958c0e35e1",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:02:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118322132,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f4b3c163b958c0e386a",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:03:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118381799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f873c163b958c0e3ae4",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:04:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118441701,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fc23c163b958c0e3d76",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:05:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118501858,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fff3c163b958c0e3fc4",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:06:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118561815,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0903b3c163b958c0e4281",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:07:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118621888,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090773c163b958c0e450c",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:08:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118681799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090b33c163b958c0e4787",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:09:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118741785,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090ef3c163b958c0e4a1a",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:10:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118801968,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0912b3c163b958c0e4cd0",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:11:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118861959,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091673c163b958c0e4f8a",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:12:02",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707118922137,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091df3c163b958c0e53b8",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:14:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707119041870,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0921b3c163b958c0e5673",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:15:01",
                "service_name": "disk",
                "service_tag": "/dev/loop4",
                "__v": 0,
                "ctime": 1707119101830,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11991,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2015",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1375,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 6042,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 23248,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            }
        ],
        [
            {
                "_id": "65c089aa3c163b958c0e0625",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:39:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707116942052,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c089e73c163b958c0e08bc",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:40:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117002006,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a233c163b958c0e0b4b",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:41:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117062049,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a5f3c163b958c0e0df2",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:42:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117122031,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a9b3c163b958c0e1095",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:43:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117182121,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ad73c163b958c0e1338",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:44:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117242291,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b133c163b958c0e161f",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:45:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117302348,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b4f3c163b958c0e1869",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:46:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117362306,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b8b3c163b958c0e1af5",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:47:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117422346,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08bc73c163b958c0e1d6c",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:48:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117482389,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c023c163b958c0e1ff5",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:49:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117542471,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c3e3c163b958c0e22d1",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:50:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117601505,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c7a3c163b958c0e2581",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:51:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117661715,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e013c163b958c0e2b26",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:52:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707117721696,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e1f3c163b958c0e2cdd",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:58:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118082140,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e5b3c163b958c0e2f8e",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:59:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118142143,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ed33c163b958c0e3376",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:01:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118262171,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f0f3c163b958c0e35ec",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:02:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118322132,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f4b3c163b958c0e3874",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:03:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118381799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f873c163b958c0e3aee",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:04:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118441701,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fc33c163b958c0e3d80",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:05:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118501858,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fff3c163b958c0e3fce",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:06:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118561815,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0903b3c163b958c0e428c",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:07:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118621888,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090773c163b958c0e4516",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:08:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118681799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090b33c163b958c0e4791",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:09:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118741785,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090ef3c163b958c0e4a25",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:10:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118801968,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0912b3c163b958c0e4cda",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:11:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118861959,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091673c163b958c0e4f94",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:12:02",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707118922137,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091df3c163b958c0e53c2",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:14:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707119041870,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0921b3c163b958c0e567d",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:15:01",
                "service_name": "disk",
                "service_tag": "/dev/loop8",
                "__v": 0,
                "ctime": 1707119101830,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 23,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/32",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 56,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 704,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 446,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            }
        ],
        [
            {
                "_id": "65c089aa3c163b958c0e061f",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:39:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707116942052,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c089e73c163b958c0e08b6",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:40:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117002006,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a233c163b958c0e0b45",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:41:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117062049,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a5f3c163b958c0e0deb",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:42:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117122031,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a9b3c163b958c0e108f",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:43:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117182121,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ad73c163b958c0e1332",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:44:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117242291,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b133c163b958c0e1619",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:45:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117302348,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b4f3c163b958c0e1863",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:46:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117362306,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b8b3c163b958c0e1aef",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:47:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117422346,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08bc73c163b958c0e1d66",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:48:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117482389,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c023c163b958c0e1fef",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:49:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117542471,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c3e3c163b958c0e22cb",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:50:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117601505,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c7a3c163b958c0e257b",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:51:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117661715,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e013c163b958c0e2b20",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:52:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707117721696,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e1f3c163b958c0e2cd6",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:58:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118082140,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e5b3c163b958c0e2f87",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:59:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118142143,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ed33c163b958c0e3370",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:01:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118262171,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f0f3c163b958c0e35e5",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:02:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118322132,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f4b3c163b958c0e386e",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:03:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118381799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f873c163b958c0e3ae8",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:04:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118441701,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fc33c163b958c0e3d7a",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:05:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118501858,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fff3c163b958c0e3fc8",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:06:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118561815,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0903b3c163b958c0e4285",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:07:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118621888,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090773c163b958c0e4510",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:08:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118681799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090b33c163b958c0e478b",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:09:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118741785,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090ef3c163b958c0e4a1e",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:10:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118801968,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0912b3c163b958c0e4cd4",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:11:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118861959,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091673c163b958c0e4f8e",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:12:02",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707118922137,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091df3c163b958c0e53bc",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:14:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707119041870,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0921b3c163b958c0e5677",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:15:01",
                "service_name": "disk",
                "service_tag": "/dev/loop6",
                "__v": 0,
                "ctime": 1707119101830,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 12041,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 64,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/core20/2105",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 110,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 1744,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 267,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            }
        ],
        [
            {
                "_id": "65c089aa3c163b958c0e0619",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:39:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707116942052,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c089e63c163b958c0e08af",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:40:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117002006,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a223c163b958c0e0b3f",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:41:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117062049,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a5f3c163b958c0e0de5",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:42:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117122031,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a9b3c163b958c0e1089",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:43:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117182121,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ad73c163b958c0e132c",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:44:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117242291,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b133c163b958c0e1613",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:45:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117302348,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b4f3c163b958c0e185d",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:46:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117362306,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b8b3c163b958c0e1ae9",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:47:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117422346,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08bc73c163b958c0e1d60",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:48:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117482389,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c023c163b958c0e1fe9",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:49:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117542471,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c3e3c163b958c0e22c5",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:50:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117601505,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c7a3c163b958c0e2575",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:51:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117661715,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e013c163b958c0e2b1a",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:52:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707117721696,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e1f3c163b958c0e2cd0",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:58:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118082140,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e5b3c163b958c0e2f81",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:59:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118142143,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ed33c163b958c0e336a",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:01:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118262171,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f0f3c163b958c0e35df",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:02:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118322132,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f4b3c163b958c0e3868",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:03:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118381799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f873c163b958c0e3ae2",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:04:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118441701,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fc23c163b958c0e3d74",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:05:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118501858,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fff3c163b958c0e3fc2",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:06:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118561815,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0903b3c163b958c0e427f",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:07:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118621888,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090773c163b958c0e450a",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:08:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118681799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090b33c163b958c0e4785",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:09:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118741785,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090ef3c163b958c0e4a18",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:10:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118801968,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0912b3c163b958c0e4ccd",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:11:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118861959,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091673c163b958c0e4f88",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:12:02",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707118922137,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091df3c163b958c0e53b6",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:14:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707119041870,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0921b3c163b958c0e5671",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:15:01",
                "service_name": "disk",
                "service_tag": "/dev/loop3",
                "__v": 0,
                "ctime": 1707119101830,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20290",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 35171,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 73622,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 485882,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            }
        ],
        [
            {
                "_id": "65c089aa3c163b958c0e061d",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:39:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707116942052,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c089e63c163b958c0e08b3",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:40:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117002006,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a233c163b958c0e0b43",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:41:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117062049,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a5f3c163b958c0e0de9",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:42:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117122031,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a9b3c163b958c0e108d",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:43:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117182121,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ad73c163b958c0e1330",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:44:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117242291,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b133c163b958c0e1617",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:45:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117302348,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b4f3c163b958c0e1861",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:46:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117362306,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b8b3c163b958c0e1aed",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:47:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117422346,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08bc73c163b958c0e1d64",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:48:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117482389,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c023c163b958c0e1fed",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:49:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117542471,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c3e3c163b958c0e22c9",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:50:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117601505,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c7a3c163b958c0e2579",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:51:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117661715,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e013c163b958c0e2b1e",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:52:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707117721696,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e1f3c163b958c0e2cd4",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:58:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118082140,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e5b3c163b958c0e2f85",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:59:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118142143,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ed33c163b958c0e336e",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:01:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118262171,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f0f3c163b958c0e35e3",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:02:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118322132,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f4b3c163b958c0e386c",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:03:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118381799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f873c163b958c0e3ae6",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:04:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118441701,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fc23c163b958c0e3d78",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:05:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118501858,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fff3c163b958c0e3fc6",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:06:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118561815,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0903b3c163b958c0e4283",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:07:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118621888,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090773c163b958c0e450e",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:08:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118681799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090b33c163b958c0e4789",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:09:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118741785,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090ef3c163b958c0e4a1c",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:10:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118801968,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0912b3c163b958c0e4cd2",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:11:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118861959,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091673c163b958c0e4f8c",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:12:02",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707118922137,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091df3c163b958c0e53ba",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:14:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707119041870,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0921b3c163b958c0e5675",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:15:01",
                "service_name": "disk",
                "service_tag": "/dev/loop5",
                "__v": 0,
                "ctime": 1707119101830,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 11,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 22,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/k6/31",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 9535,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 21898,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 10153,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            }
        ],
        [
            {
                "_id": "65c089aa3c163b958c0e0623",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:39:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707116942052,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c089e73c163b958c0e08ba",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:40:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117002006,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a233c163b958c0e0b49",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:41:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117062049,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a5f3c163b958c0e0df0",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:42:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117122031,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a9b3c163b958c0e1093",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:43:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117182121,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ad73c163b958c0e1336",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:44:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117242291,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b133c163b958c0e161d",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:45:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117302348,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b4f3c163b958c0e1867",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:46:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117362306,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b8b3c163b958c0e1af3",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:47:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117422346,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08bc73c163b958c0e1d6a",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:48:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117482389,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c023c163b958c0e1ff3",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:49:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117542471,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c3e3c163b958c0e22cf",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:50:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117601505,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c7a3c163b958c0e257f",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:51:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117661715,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e013c163b958c0e2b24",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:52:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707117721696,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e1f3c163b958c0e2cdb",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:58:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118082140,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e5b3c163b958c0e2f8c",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:59:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118142143,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ed33c163b958c0e3374",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:01:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118262171,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f0f3c163b958c0e35e9",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:02:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118322132,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f4b3c163b958c0e3872",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:03:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118381799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f873c163b958c0e3aec",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:04:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118441701,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fc33c163b958c0e3d7e",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:05:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118501858,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fff3c163b958c0e3fcc",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:06:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118561815,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0903b3c163b958c0e4289",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:07:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118621888,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090773c163b958c0e4514",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:08:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118681799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090b33c163b958c0e478f",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:09:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118741785,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090ef3c163b958c0e4a23",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:10:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118801968,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0912b3c163b958c0e4cd8",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:11:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118861959,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091673c163b958c0e4f92",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:12:02",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707118922137,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091df3c163b958c0e53c0",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:14:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707119041870,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0921b3c163b958c0e567b",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:15:01",
                "service_name": "disk",
                "service_tag": "/dev/sda2",
                "__v": 0,
                "ctime": 1707119101830,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 131072,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 316,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 130756,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 209,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 12,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/boot",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 1380,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 133326,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 4499,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 1225,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 1136344,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 23204,
                        "metrix_unit": "per_sec"
                    }
                ]
            }
        ],
        [
            {
                "_id": "65c089aa3c163b958c0e0617",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:39:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707116942052,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c089e63c163b958c0e08ad",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:40:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117002006,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a223c163b958c0e0b3d",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:41:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117062049,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a5f3c163b958c0e0de3",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:42:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117122031,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a9b3c163b958c0e1087",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:43:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117182121,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ad73c163b958c0e1329",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:44:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117242291,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b133c163b958c0e1611",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:45:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117302348,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b4f3c163b958c0e185b",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:46:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117362306,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b8b3c163b958c0e1ae7",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:47:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117422346,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08bc73c163b958c0e1d5e",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:48:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117482389,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c023c163b958c0e1fe7",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:49:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117542471,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c3e3c163b958c0e22c3",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:50:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117601505,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c7a3c163b958c0e2573",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:51:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117661715,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e013c163b958c0e2b16",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:52:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707117721696,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e1f3c163b958c0e2cce",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:58:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118082140,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e5b3c163b958c0e2f7e",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:59:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118142143,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ed33c163b958c0e3368",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:01:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118262171,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f0f3c163b958c0e35dd",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:02:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118322132,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f4b3c163b958c0e3866",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:03:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118381799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f873c163b958c0e3ae0",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:04:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118441701,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fc23c163b958c0e3d72",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:05:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118501858,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fff3c163b958c0e3fc0",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:06:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118561815,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0903b3c163b958c0e427d",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:07:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118621888,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090773c163b958c0e4508",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:08:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118681799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090b33c163b958c0e4783",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:09:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118741785,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090ef3c163b958c0e4a16",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:10:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118801968,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0912b3c163b958c0e4ccb",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:11:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118861959,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091673c163b958c0e4f86",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:12:02",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707118922137,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091df3c163b958c0e53b4",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:14:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707119041870,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0921b3c163b958c0e566f",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:15:01",
                "service_name": "disk",
                "service_tag": "/dev/loop1",
                "__v": 0,
                "ctime": 1707119101830,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 815,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 92,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/lxd/24061",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 278,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 8716,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 2371,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            }
        ],
        [
            {
                "_id": "65c089aa3c163b958c0e0621",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:39:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707116942052,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c089e73c163b958c0e08b8",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:40:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117002006,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a233c163b958c0e0b47",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:41:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117062049,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a5f3c163b958c0e0ded",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:42:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117122031,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08a9b3c163b958c0e1091",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:43:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117182121,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ad73c163b958c0e1334",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:44:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117242291,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b133c163b958c0e161b",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:45:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117302348,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b4f3c163b958c0e1865",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:46:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117362306,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08b8b3c163b958c0e1af1",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:47:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117422346,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08bc73c163b958c0e1d68",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:48:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117482389,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c023c163b958c0e1ff1",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:49:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117542471,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c3e3c163b958c0e22cd",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:50:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117601505,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08c7a3c163b958c0e257d",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:51:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117661715,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e013c163b958c0e2b22",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:52:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707117721696,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e1f3c163b958c0e2cd9",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:58:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118082140,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08e5b3c163b958c0e2f89",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 12:59:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118142143,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08ed33c163b958c0e3372",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:01:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118262171,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f0f3c163b958c0e35e7",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:02:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118322132,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f4b3c163b958c0e3870",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:03:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118381799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08f873c163b958c0e3aea",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:04:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118441701,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fc33c163b958c0e3d7c",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:05:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118501858,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c08fff3c163b958c0e3fca",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:06:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118561815,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0903b3c163b958c0e4287",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:07:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118621888,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090773c163b958c0e4512",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:08:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118681799,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090b33c163b958c0e478d",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:09:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118741785,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c090ef3c163b958c0e4a20",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:10:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118801968,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0912b3c163b958c0e4cd6",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:11:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118861959,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091673c163b958c0e4f90",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:12:02",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707118922137,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c091df3c163b958c0e53be",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:14:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707119041870,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            },
            {
                "_id": "65c0921b3c163b958c0e5679",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-05 13:15:01",
                "service_name": "disk",
                "service_tag": "/dev/loop7",
                "__v": 0,
                "ctime": 1707119101830,
                "service_data": [
                    {
                        "metrix_name": "inodes_used",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_free",
                        "metrix_value": 658,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "inodes_use_percent",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "mounted_on",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "size",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "used",
                        "metrix_value": 41,
                        "metrix_unit": "M"
                    },
                    {
                        "metrix_name": "available",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "usage_percentage",
                        "metrix_value": 100,
                        "metrix_unit": "%"
                    },
                    {
                        "metrix_name": "mount_point",
                        "metrix_value": "/snap/snapd/20671",
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_iops_read",
                        "metrix_value": 31376,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 64204,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_read",
                        "metrix_value": 761490,
                        "metrix_unit": "per_sec"
                    },
                    {
                        "metrix_name": "disk_iops_write",
                        "metrix_value": 0,
                        "metrix_unit": "count"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "bytes"
                    },
                    {
                        "metrix_name": "disk_io_write",
                        "metrix_value": 0,
                        "metrix_unit": "per_sec"
                    }
                ]
            }
        ]
    ]
}
 */


// *******************************************************************************

/**
 * @api {get} /saas-zoomview/api/v1/infra/graph/interface/:host_name/:from/:to Interface Graph
 * @apiGroup Interface-Graph
 * @apiParam {String} host_name host_name of the host (Required)
 * @apiParam {String} from from timestamp (Required)
 * @apiParam {String} to to timestamp (Required)
  * @apiHeader {String} Authorization Bearer token. 
* @apiSuccessExample Success-Response:
{
    "message": [
        [
            {
                "_id": "65c1c9c53c163b958c1a7f08",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:25:02",
                "service_name": "interface",
                "service_tag": "ens161:",
                "__v": 0,
                "ctime": 1707198902558,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3414753457,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36929461,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3276960,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33480,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477725,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10835662830,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73317642,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2245674026,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8950382084,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70312585,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1ca003c163b958c1a81a9",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:26:01",
                "service_name": "interface",
                "service_tag": "ens161:",
                "__v": 0,
                "ctime": 1707198961704,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3414794030,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36929924,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3276960,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33480,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10835697650,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73317769,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2245719845,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8950459240,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70312703,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1ca3d3c163b958c1a8451",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:27:01",
                "service_name": "interface",
                "service_tag": "ens161:",
                "__v": 0,
                "ctime": 1707199021759,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3414836073,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36930398,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3276960,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33480,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10835722887,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73317874,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2245764559,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8950534120,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70312799,
                        "metric_value": "pkts"
                    }
                ]
            }
        ],
        [
            {
                "_id": "65c1befc3c163b958c1a04d6",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:39:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196142288,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3412760161,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36907135,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3274804,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33458,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477338,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834387693,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73312449,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2243749911,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8946978548,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70307744,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1bf383c163b958c1a07ab",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:40:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196202384,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3412803517,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36907610,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3274890,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33459,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477346,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834416759,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73312559,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2243793382,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947053506,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70307850,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1bf743c163b958c1a0a64",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:41:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196262428,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3412844586,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36908076,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3274890,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33459,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477354,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834436374,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73312652,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2243836853,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947126159,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70307934,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1bfb13c163b958c1a0cf2",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:42:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196322519,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3412886988,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36908554,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3274890,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33459,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834465451,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73312766,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2243880324,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947200828,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70308038,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1bfed3c163b958c1a0f94",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:43:01",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196381530,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3412928302,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36909023,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3274976,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33460,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477371,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834500048,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73312896,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2243922005,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947277401,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70308162,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c02a3c163b958c1a1239",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:44:01",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196441689,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3412969377,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36909488,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3274976,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33460,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834520676,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73312992,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2243965475,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947351574,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70308249,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c0653c163b958c1a14f6",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:45:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196502032,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413012861,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36909963,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275062,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33461,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834541582,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73313087,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244007222,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947426356,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70308339,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c0a13c163b958c1a1798",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:46:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196562084,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413055129,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36910434,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275062,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33461,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834571669,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73313203,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244050693,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947505795,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70308450,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c0dc3c163b958c1a1a52",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:47:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196622323,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413100178,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36910938,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275368,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33464,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834602298,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73313325,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244096959,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947583025,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70308562,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c1183c163b958c1a1cdd",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:48:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196682418,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413141564,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36911408,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275368,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33464,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477416,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834634260,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73313454,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244143700,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947662344,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70308679,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c1533c163b958c1a1f98",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:49:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196742401,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413184515,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36911876,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275368,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33464,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477426,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834670019,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73313585,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244190452,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947741052,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70308800,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c1913c163b958c1a225b",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:50:01",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196801645,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413227149,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36912342,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275368,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33464,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834710125,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73313728,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244235461,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947820322,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70308936,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c1ce3c163b958c1a2513",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:51:01",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196861870,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413269135,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36912816,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275368,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33464,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477445,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834731321,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73313826,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244278931,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947896181,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70309025,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c20b3c163b958c1a27e2",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:52:01",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196921946,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413311280,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36913291,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275368,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33464,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477454,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834766099,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73313953,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244322313,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8947973153,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70309145,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c2473c163b958c1a2a74",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:53:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707196982074,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413353881,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36913772,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275478,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33465,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477463,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834805890,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73314094,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244365304,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8948053325,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70309281,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c2823c163b958c1a2d49",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:54:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197042323,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413397901,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36914277,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275478,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33465,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834826721,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73314191,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244408775,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8948127076,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70309369,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c2f93c163b958c1a31c2",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:56:01",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197161619,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413487090,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36915300,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275478,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33465,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477482,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834865763,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73314377,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244464260,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8948241504,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70309539,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c3373c163b958c1a3496",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:57:01",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197221863,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413539439,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36915878,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275784,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33468,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834898957,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73314496,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244506073,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8948318260,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70309651,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c3723c163b958c1a3735",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:58:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197282280,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413584079,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36916368,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275784,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33468,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477499,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834938917,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73314637,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244550886,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8948397292,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70309784,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c3b13c163b958c1a3a13",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 10:59:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197342265,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413627706,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36916844,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275784,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33468,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477506,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834954718,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73314722,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244594291,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8948469963,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70309860,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c3ec3c163b958c1a3d7e",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:00:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197402435,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413670552,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36917315,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275870,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33469,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477514,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10834984983,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73314842,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244637762,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8948546444,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70309975,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c4273c163b958c1a404d",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:01:01",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197461590,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413712982,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36917805,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3275956,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33470,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477523,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10835020265,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73314974,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244681170,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8948624080,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70310100,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c4633c163b958c1a4317",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:02:01",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197521742,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413757801,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36918317,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3276176,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33472,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10835056541,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73315109,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244725925,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8948701959,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70310226,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c4a03c163b958c1a4639",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:03:01",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197581754,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413801991,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36918823,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3276176,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33472,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10835073646,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73315196,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244769394,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8948774927,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70310305,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c5173c163b958c1a4ae1",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:05:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197702929,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413895357,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36919864,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3276262,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33473,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 236752,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10835113688,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73315375,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244825417,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8948889561,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70310471,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c5513c163b958c1a4d6d",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:06:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197762127,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413937280,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36920336,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3276262,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33473,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477559,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10835152536,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73315512,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244867230,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8948968709,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70310602,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c5903c163b958c1a5036",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:07:02",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197822335,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3413980006,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36920821,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3276372,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33474,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477568,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10835177426,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73315612,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244911781,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8949043249,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70310695,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c5e23c163b958c1a53f3",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:08:08",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707197888204,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3414021663,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36921289,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3276458,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33475,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477576,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10835203015,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73315723,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2244955252,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8949118214,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70310799,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c6433c163b958c1a57a3",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:10:01",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707198001702,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3414110854,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36922261,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3276544,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33476,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477587,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10835242589,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73315909,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2245011275,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8949233807,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70310974,
                        "metric_value": "pkts"
                    }
                ]
            },
            {
                "_id": "65c1c67e3c163b958c1a5a42",
                "customer_id": "657bfad7d5b4ebd7170b4079",
                "host_name": "zcsit",
                "ist_string": "2024-02-06 11:11:01",
                "service_name": "interface",
                "service_tag": "ens160:",
                "__v": 0,
                "ctime": 1707198061655,
                "service_data": [
                    {
                        "metrix_name": "rx_bcast_bytes",
                        "metrix_value": 3414152932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_bcast_pkts",
                        "metrix_value": 36922734,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_bytes",
                        "metrix_value": 2387455860,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "rx_mcast_bytes",
                        "metrix_value": 3276544,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_mcast_pkts",
                        "metrix_value": 33476,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_pkts",
                        "metrix_value": 477596,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "rx_ucast_bytes",
                        "metrix_value": 10835281115,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "rx_ucast_pkts",
                        "metrix_value": 73316045,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bcast_bytes",
                        "metrix_value": 127932,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_bcast_pkts",
                        "metrix_value": 3046,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_bytes",
                        "metrix_value": 2245054269,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_dropped",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_err",
                        "metrix_value": 0,
                        "metric_value": "none"
                    },
                    {
                        "metrix_name": "tx_mcast_bytes",
                        "metrix_value": 7110,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_mcast_pkts",
                        "metrix_value": 70,
                        "metric_value": "pkts"
                    },
                    {
                        "metrix_name": "tx_ucast_bytes",
                        "metrix_value": 8949312507,
                        "metric_value": "bytes"
                    },
                    {
                        "metrix_name": "tx_ucast_pkts",
                        "metrix_value": 70311103,
                        "metric_value": "pkts"
                    }
                ]
            }
        ]
    ]
}
 */

// *********************************************************************************

/**
 * @api {get} /saas-zoomview/api/v1/infra/graph/memory/:host_name/:from/:to Memory Graph
 * @apiGroup Memory-Graph
 * @apiParam {String} host_name host_name of the host (Required)
 * @apiParam {String} from from timestamp (Required)
 * @apiParam {String} to to timestamp (Required)
 * @apiHeader {String} Authorization Bearer token. 
* @apiSuccessExample Success-Response:
{
    "message": [
        {
            "_id": "65bc87cf3c163b958ced8c84",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-02 11:42:02",
            "service_name": "ram",
            "service_tag": "",
            "__v": 0,
            "ctime": 1706854322086,
            "service_data": [
                {
                    "metrix_name": "dirty",
                    "metrix_value": 448,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "anon_pages",
                    "metrix_value": 227612,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "shmem",
                    "metrix_value": 768,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "swap_free",
                    "metrix_value": 4162624,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "swap_total",
                    "metrix_value": 4194300,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "write_back",
                    "metrix_value": 0,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "mem_free",
                    "metrix_value": 398544,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "buffers",
                    "metrix_value": 271208,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "cached",
                    "metrix_value": 4313248,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "slab",
                    "metrix_value": 641052,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "mem_total",
                    "metrix_value": 6052944,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "mem_used",
                    "metrix_value": 428892,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "swap_used",
                    "metrix_value": 31676,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "mem_used_percentage",
                    "metrix_value": 3.23,
                    "metrix_unit": "%"
                },
                {
                    "metrix_name": "swap_used_percentage",
                    "metrix_value": 4.2,
                    "metrix_unit": "%"
                }
            ]
        },
        {
            "_id": "65bc880b3c163b958ced8dd6",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-02 11:43:02",
            "service_name": "ram",
            "service_tag": "",
            "__v": 0,
            "ctime": 1706854382371,
            "service_data": [
                {
                    "metrix_name": "buffers",
                    "metrix_value": 271208,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "slab",
                    "metrix_value": 640892,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "cached",
                    "metrix_value": 4313252,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "swap_total",
                    "metrix_value": 4194300,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "dirty",
                    "metrix_value": 232,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "write_back",
                    "metrix_value": 0,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "shmem",
                    "metrix_value": 768,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "mem_free",
                    "metrix_value": 401172,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "anon_pages",
                    "metrix_value": 226544,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "mem_total",
                    "metrix_value": 6052944,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "swap_free",
                    "metrix_value": 4162624,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "mem_used",
                    "metrix_value": 426420,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "swap_used",
                    "metrix_value": 31676,
                    "metrix_unit": "bytes"
                },
                {
                    "metrix_name": "mem_used_percentage",
                    "metrix_value": 3.23,
                    "metrix_unit": "%"
                },
                {
                    "metrix_name": "swap_used_percentage",
                    "metrix_value": 4.2,
                    "metrix_unit": "%"
                }
            ]
        }
    ]
}

 */


// ********************************************************************************************

/**
 * @api {get} /saas-zoomview/api/v1/infra/graph/process/:host_name/:from/:to Process Graph
 * @apiGroup Process-Graph 
 * @apiParam {String} host_name host_name of the host (Required)
 * @apiParam {String} from from timestamp (Required)
 * @apiParam {String} to to timestamp (Required)
 * @apiHeader {String} Authorization Bearer token. 
* @apiSuccessExample Success-Response:
{
    "message": [
        {
            "_id": "65c0899a3c163b958c0e04e5",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "snapd",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "3920176",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.0",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.4",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "1689280",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "Jan12",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "root",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04c3",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "fluent-bit",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "783915",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.3",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.3",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "1714920",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "2023",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "root",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04cc",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "systemd-resolve",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "238759",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.0",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.1",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "24804",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "Jan16",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "systemd+",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04c1",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "systemd-journal",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "539",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.1",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.4",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "93228",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "2023",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "root",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04d2",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "networkd-dispat",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "1050",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.0",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.1",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "26904",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "2023",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "root",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04e3",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "newrelic-infra",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "783591",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "1.8",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.5",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "809328",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "2023",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "root",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04d4",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "systemd-logind",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "238727",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.0",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.1",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "17692",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "Jan16",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "root",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04c7",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "zoomview-pinkey",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "1576947",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.0",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.1",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "1449136",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "Jan23",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "root",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04c5",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "multipathd",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "723",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.0",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.3",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "411452",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "2023",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "root",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04e0",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "node",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "1657756",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "/home/zcsi",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.5",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "0.5",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "637424",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "2023",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04dd",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "PM2",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "8406",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "v5.3.0:",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "God",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "0.1",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "0.6",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "898064",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04d0",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "udisksd",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "1061",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.0",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.1",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "395568",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "2023",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "root",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04c9",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "systemd",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "1919",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.0",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.1",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "19036",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "2023",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "zcsit",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04d9",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "systemd-network",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "238711",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.0",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.1",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "19192",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "Jan16",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "systemd+",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04ce",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "unattended-upgr",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "1111",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.0",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.1",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "105152",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "2023",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "root",
                    "metric_unit": "bytes"
                }
            ]
        },
        {
            "_id": "65c0899a3c163b958c0e04d7",
            "customer_id": "657bfad7d5b4ebd7170b4079",
            "host_name": "zcsit",
            "ist_string": "2024-02-05 12:39:02",
            "service_name": "process",
            "service_tag": "ModemManager",
            "__v": 0,
            "ctime": 1707116942097,
            "service_data": [
                {
                    "metric_name": "pid",
                    "metric_value": "1130",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "cpu",
                    "metric_value": "0.0",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "memory",
                    "metric_value": "0.1",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "vsz",
                    "metric_value": "318820",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "start_time",
                    "metric_value": "2023",
                    "metric_unit": "bytes"
                },
                {
                    "metric_name": "user",
                    "metric_value": "root",
                    "metric_unit": "bytes"
                }
            ]
        }
    ]
}
 */
