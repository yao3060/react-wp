
const initState = {
    posts: [
        {
            "id": 2855,
            "date": "2018-12-24T10:46:45",
            "date_gmt": "2018-12-24T02:46:45",
            "guid": {
                "rendered": "http://www.yaoin.net/?p=2855"
            },
            "modified": "2018-12-24T11:55:05",
            "modified_gmt": "2018-12-24T03:55:05",
            "slug": "docker-compose-å°\u008fç»\u0093",
            "status": "publish",
            "type": "post",
            "link": "https://src.yaoin.net/blog/2018/12/24/docker-compose-å°\u008fç»\u0093/",
            "title": {
                "rendered": "docker-compose 小结"
            },
            "content": {
                "rendered": "\n<pre class=\"wp-block-code\"><code>version: '3'\n\nservices:\n\n  nginx:\n    container_name: ${COMPOSE_PROJECT_NAME}_nginx_con\n    build:\n      context: .\n      dockerfile: ./.docker/nginx/Dockerfile\n      args:\n        - WEB_USER=${WEB_USER}\n        - WEB_GROUP=${WEB_GROUP}\n    ports:\n      - 8080:80\n    depends_on:\n      - php-fpm\n    volumes:\n      - ./src:/var/www:ro\n      - ./logs/nginx:/var/log/nginx\n  mysql:\n    container_name: ${COMPOSE_PROJECT_NAME}_mysql_con\n    build:\n      context: ./.docker/mysql\n      args:\n        - MYSQL_CONTAINER_USER=${MYSQL_CONTAINER_USER}\n        - MYSQL_CONTAINER_GROUP=${MYSQL_CONTAINER_GROUP}\n    volumes:\n      - ./logs/mysql:${MYSQL_LOG_DIR}\n      - ./database:/docker-entrypoint-initdb.d\n    environment:\n      - MYSQL_CONTAINER_USER=${MYSQL_CONTAINER_USER}\n      - MYSQL_CONTAINER_GROUP=${MYSQL_CONTAINER_GROUP}\n      - MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}\n  redis:\n    container_name: ${COMPOSE_PROJECT_NAME}_redis_con\n    build:\n      context: .\n      dockerfile: ./.docker/redis/Dockerfile\n  php-fpm:\n    container_name: ${COMPOSE_PROJECT_NAME}_php_con\n    build:\n      context: .\n      dockerfile: ./.docker/php${PHP_VER}-fpm/Dockerfile\n      args:\n        - WEB_USER=${WEB_USER}\n        - WEB_GROUP=${WEB_GROUP}\n        - PHP_ROOT_DIR=${PHP_ROOT_DIR}\n    working_dir: ${PHP_APP_DIR}\n    volumes:\n      - ./src:${PHP_APP_DIR}\n      - ./logs/php:${PHP_ROOT_DIR}/logs\n    environment:\n      - WEB_USER=${WEB_USER}\n      - WEB_GROUP=${WEB_GROUP}\n      - MYSQL_HOST=${MYSQL_HOST}\n      - MYSQL_ROOT_USER=${MYSQL_ROOT_USER}\n      - MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}\n      - REDIS_HOST=${REDIS_HOST}\n      - REDIS_PORT=${REDIS_PORT}\n</code></pre>\n\n\n\n<p><code>docker-compose run</code>&nbsp;命令允许你为你的应用程序运行一次性命令。例如，查看哪些环境变量可以用于 web 服务：</p>\n\n\n\n<pre class=\"wp-block-code\"><code>docker-compose run nginx env\ndocker-compose run nginx ls -lah /var/www</code></pre>\n\n\n\n<p><strong>.bulid\ufeff</strong>服务除了可以基于指定的镜像，还可以基于一份 Dockerfile，在使用 up 启动之时执行构建任务，这个构建标签就是 build，它可以指定 Dockerfile 所在文件夹的路径。Compose 将会利用它自动构建这个镜像，然后使用这个镜像启动服务容器。</p>\n\n\n\n<p>设定上下文根目录，然后以该目录为准指定 Dockerfile</p>\n\n\n\n<pre class=\"wp-block-code\"><code>  nginx:\n    container_name: ${COMPOSE_PROJECT_NAME}_nginx_con\n    build:\n      context: .\n      dockerfile: ./.docker/nginx/Dockerfile\n      args:\n        - WEB_USER=${WEB_USER}\n        - WEB_GROUP=${WEB_GROUP}</code></pre>\n\n\n\n<p><strong>args </strong>添加构建参数，这些参数是仅在构建过程中可访问的环境变量，如 nginx 的 Dockerfile</p>\n\n\n\n<pre class=\"wp-block-code\"><code>FROM nginx:1.15-alpine\n\nARG WEB_USER\nARG WEB_GROUP\n\nCOPY ./.docker/nginx/conf.d /etc/nginx/conf.d\n\nCOPY ./src /var/www\n\nRUN echo \"Change folder owner to: ${WEB_USER}:${WEB_GROUP}\"\n\nRUN chown -R ${WEB_USER}:${WEB_GROUP} /var/www\n</code></pre>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>docker-compose run&nbsp;命令允许你为 &#8230;</p>\n",
                "protected": false
            },
            "author": 2,
            "featured_media": 0,
            "comment_status": "open",
            "ping_status": "closed",
            "sticky": false,
            "template": "",
            "format": "standard",
            "meta": [],
            "categories": [
                420
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2855"
                    }
                ],
                "collection": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/comments?post=2855"
                    }
                ],
                "version-history": [
                    {
                        "count": 1,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2855/revisions"
                    }
                ],
                "predecessor-version": [
                    {
                        "id": 2858,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2855/revisions/2858"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media?parent=2855"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/categories?post=2855"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/tags?post=2855"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 2853,
            "date": "2018-12-20T14:44:32",
            "date_gmt": "2018-12-20T06:44:32",
            "guid": {
                "rendered": "http://src.yaoin.net/?p=2853"
            },
            "modified": "2018-12-20T14:44:32",
            "modified_gmt": "2018-12-20T06:44:32",
            "slug": "nginxä¹\u008bproxy_passæ\u008c\u0087ä»¤å®\u008cå\u0085¨æ\u008b\u0086è§£",
            "status": "publish",
            "type": "post",
            "link": "https://src.yaoin.net/blog/2018/12/20/nginxä¹\u008bproxy_passæ\u008c\u0087ä»¤å®\u008cå\u0085¨æ\u008b\u0086è§£/",
            "title": {
                "rendered": "nginx之proxy_pass指令完全拆解"
            },
            "content": {
                "rendered": "\n<h2 id=\"h2_1\">一、proxy_pass的nginx官方指南</h2>\n\n\n\n<p>nginx中有两个模块都有<code>proxy_pass</code>指令。</p>\n\n\n\n<ul><li><code>ngx_http_proxy_module</code>的<code>proxy_pass</code>：</li></ul>\n\n\n\n<pre class=\"wp-block-code\"><code>语法: proxy_pass URL;\n场景: location, if in location, limit_except\n说明: 设置后端代理服务器的\b协议(protocol)和地址(address),以及location中可以匹配的一个可选的URI。协议可以是\"http\"或\"https\"。地址可以是一个域名或ip地址和端口，或者一个 unix-domain socket 路径。  \n详见官方文档: http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass\nURI的匹配，本文第四部分\b重点讨论。\n</code></pre>\n\n\n\n<ul><li><code>ngx_stream_proxy_module</code>的<code>proxy_pass</code>：</li></ul>\n\n\n\n<pre class=\"wp-block-code\"><code>语法: proxy_pass address;\n场景: server\n说明: 设置后端代理服务器的地址。这个地址(address)可以是一个域名或ip地址和端口，或者一个 unix-domain socket路径。  \n详见官方文档: http://nginx.org/en/docs/stream/ngx_stream_proxy_module.html#proxy_pass\n</code></pre>\n\n\n\n<h2 id=\"h2_2\">二、两个<code>proxy_pass</code>的关系和区别</h2>\n\n\n\n<p>在两个模块\b中，两个<code>proxy_pass</code>都是用来做后端代理的指令。<br><code>ngx_stream_proxy_module</code>模块的<code>proxy_pass</code>指令只能在server段使用使用, \b只需要提供域名或ip地址和端口。可以理解为端口转发，可以是tcp端口，也可以是udp端口。<br><code>ngx_http_proxy_module</code>模块的<code>proxy_pass</code>\b指令需要在location段，location中的if段，limit_except段中使用，处理需要提供域名或ip地址和端口外，还需要提供协议，如&#8221;http&#8221;或&#8221;https&#8221;，还有一个可选的uri可以配置。</p>\n\n\n\n<h2 id=\"h2_3\">三、\bproxy_pass的具体用法</h2>\n\n\n\n<h3 id=\"h3_4\"><code>ngx_stream_proxy_module</code>模块的<code>proxy_pass</code>指令</h3>\n\n\n\n<pre class=\"wp-block-code\"><code>server {\n    listen 127.0.0.1:12345;\n    proxy_pass 127.0.0.1:8080;\n}\n\nserver {\n    listen 12345;\n    proxy_connect_timeout 1s;\n    proxy_timeout 1m;\n    proxy_pass example.com:12345;\n}\n\nserver {\n    listen 53 udp;\n    proxy_responses 1;\n    proxy_timeout 20s;\n    proxy_pass dns.example.com:53;\n}\n\nserver {\n    listen [::1]:12345;\n    proxy_pass unix:/tmp/stream.socket;\n}\n</code></pre>\n\n\n\n<h3 id=\"h3_5\"><code>ngx_http_proxy_module</code>模块的<code>proxy_pass</code>\b指令</h3>\n\n\n\n<pre class=\"wp-block-code\"><code>server {\n    listen      80;\n    server_name www.test.com;\n\n    # 正常代理，不修改后端url的\n    location /some/path/ {\n        proxy_pass http://127.0.0.1;\n    }\n\n    # 修改后端url地址的代理（本例后端地址中，最后带了一个斜线)\n    location /testb {\n        proxy_pass http://www.other.com:8801/;\n    }\n\n    # 使用 if in location\n    location /google {\n        if ( $geoip_country_code ~ (RU|CN) ) {\n            proxy_pass http://www.google.hk;\n        }\n    }\n\n    location /yongfu/ {\n        # 没有匹配 limit_except 的，代理到 unix:/tmp/backend.socket:/uri/\n        proxy_pass http://unix:/tmp/backend.socket:/uri/;;\n\n        # 匹配到请求方法为: PUT or DELETE, 代理到9080\n        limit_except PUT DELETE {\n            proxy_pass http://127.0.0.1:9080;\n        }\n    }\n\n}\n</code></pre>\n\n\n\n<h2 id=\"h2_6\">四、<code>proxy_pass</code>后，后端服务器的<code>url</code>(<code>request_uri</code>)情况分析</h2>\n\n\n\n<pre class=\"wp-block-code\"><code>server {\n    listen      80;\n    server_name www.test.com;\n\n    # 情形A\n    # 访问 http://www.test.com/testa/aaaa\n    # 后端的request_uri为: /testa/aaaa\n    location ^~ /testa/ {\n        proxy_pass http://127.0.0.1:8801;\n    }\n    \n    # 情形B\n    # 访问 http://www.test.com/testb/bbbb\n    # 后端的request_uri为: /bbbb\n    location ^~ /testb/ {\n        proxy_pass http://127.0.0.1:8801/;\n    }\n\n    # 情形C\n    # 下面这段location是正确的\n    location ~ /testc {\n        proxy_pass http://127.0.0.1:8801;\n    }\n\n    # 情形D\n    # 下面这段location是错误的\n    #\n    # nginx -t 时，会报如下错误: \n    #\n    # nginx: [emerg] \"proxy_pass\" cannot have URI part in location given by regular \n    # expression, or inside named location, or inside \"if\" statement, or inside \n    # \"limit_except\" block in /opt/app/nginx/conf/vhost/test.conf:17\n    # \n    # 当location为正则表达式时，proxy_pass 不能包含URI部分。本例中包含了\"/\"\n    location ~ /testd {\n        proxy_pass http://127.0.0.1:8801/;   # 记住，location为正则表达式时，不能这样写！！！\n    }\n\n    # 情形E\n    # 访问 http://www.test.com/ccc/bbbb\n    # 后端的request_uri为: /aaa/ccc/bbbb\n    location /ccc/ {\n        proxy_pass http://127.0.0.1:8801/aaa$request_uri;\n    }\n\n    # 情形F\n    # 访问 http://www.test.com/namea/ddd\n    # 后端的request_uri为: /yongfu?namea=ddd\n    location /namea/ {\n        rewrite    /namea/([^/]+) /yongfu?namea=$1 break;\n        proxy_pass http://127.0.0.1:8801;\n    }\n\n    # 情形G\n    # 访问 http://www.test.com/nameb/eee\n    # 后端的request_uri为: /yongfu?nameb=eee\n    location /nameb/ {\n        rewrite    /nameb/([^/]+) /yongfu?nameb=$1 break;\n        proxy_pass http://127.0.0.1:8801/;\n    }\n\n    access_log /data/logs/www/www.test.com.log;\n}\n\nserver {\n    listen      8801;\n    server_name www.test.com;\n    \n    root        /data/www/test;\n    index       index.php index.html;\n\n    rewrite ^(.*)$ /test.php?u=$1 last;\n\n    location ~ \\.php$ {\n        try_files $uri =404;\n        fastcgi_pass unix:/tmp/php-cgi.sock;\n        fastcgi_index index.php;\n        include fastcgi.conf;\n    }\n\n    access_log /data/logs/www/www.test.com.8801.log;\n}\n\n</code></pre>\n\n\n\n<p>文件:&nbsp;<code>/data/www/test/test.php</code></p>\n\n\n\n<pre class=\"wp-block-code\"><code>&lt;?php\necho '$_SERVER[REQUEST_URI]:' . $_SERVER['REQUEST_URI'];\n</code></pre>\n\n\n\n<p>通过查看 $_SERVER[&#8216;REQUEST_URI&#8217;] 的值，我们可以看到每次请求的\b后端的request_uri的值，进行验证。</p>\n\n\n\n<h4 id=\"h4_7\">小结</h4>\n\n\n\n<p>情形A和情形B进行对比，可以知道<code>proxy_pass</code>后带一个URI,可以是斜杠(/)也可以是其他uri，对后端<code>request_uri</code>变量的影响。<br>情形D说明，当location为正则表达式时，<code>proxy_pass</code>不能包含URI部分。<br>情形E通过变量($request_uri, 也可以是其他变量)，对后端的<code>request_uri</code>进行改写。<br>情形F和情形G通过rewrite配合break标志,对url进行改写，并\b改写后端的<code>request_uri</code>。需要注意，<code>proxy_pass</code>地址的URI部分在情形G中无效，不管如何设置，都会被忽略。</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>一、proxy_pass的nginx官方指南 nginx中有 &#8230;</p>\n",
                "protected": false
            },
            "author": 2,
            "featured_media": 0,
            "comment_status": "open",
            "ping_status": "closed",
            "sticky": false,
            "template": "",
            "format": "standard",
            "meta": [],
            "categories": [
                3
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2853"
                    }
                ],
                "collection": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/comments?post=2853"
                    }
                ],
                "version-history": [
                    {
                        "count": 1,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2853/revisions"
                    }
                ],
                "predecessor-version": [
                    {
                        "id": 2854,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2853/revisions/2854"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media?parent=2853"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/categories?post=2853"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/tags?post=2853"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 2842,
            "date": "2018-11-28T06:48:56",
            "date_gmt": "2018-11-27T22:48:56",
            "guid": {
                "rendered": "http://www.yaoin.net/?p=2842"
            },
            "modified": "2018-11-28T06:52:26",
            "modified_gmt": "2018-11-27T22:52:26",
            "slug": "multi-dimensional-array-sort",
            "status": "publish",
            "type": "post",
            "link": "https://src.yaoin.net/blog/2018/11/28/multi-dimensional-array-sort/",
            "title": {
                "rendered": "PHP multi-dimensional array sort"
            },
            "content": {
                "rendered": "\n<p>From: http://php.net/manual/en/function.usort.php</p>\n\n\n\n<p><strong>Example #4 usort() example using a <a href=\"http://php.net/manual/en/functions.anonymous.php\">closure</a> to sort a multi-dimensional array</strong></p>\n\n\n\n<pre class=\"wp-block-code\"><code>&lt;?php\n$array[0] = array('key_a' => 'z', 'key_b' => 'c');\n$array[1] = array('key_a' => 'x', 'key_b' => 'b');\n$array[2] = array('key_a' => 'y', 'key_b' => 'a');\n\nfunction build_sorter($key) {\n    return function ($a, $b) use ($key) {\n        return strnatcmp($a[$key], $b[$key]);\n    };\n}\n\nusort($array, build_sorter('key_b'));\n\nforeach ($array as $item) {\n    echo $item['key_a'] . ', ' . $item['key_b'] . \"\\n\";\n}\n?>\nThe above example will output:\ny, a\nx, b\nz, c</code></pre>\n\n\n\n<p>You can also sort multi-dimensional array for multiple values like as:</p>\n\n\n\n<pre class=\"wp-block-code\"><code>&lt;?php\n$arr = array(\n    array('id'=>1, 'age'=>1, 'sex'=>6, 'name'=>'a'),\n    array('id'=>2, 'age'=>3, 'sex'=>1, 'name'=>'c'),\n    array('id'=>3, 'age'=>3, 'sex'=>1, 'name'=>'b'),\n    array('id'=>4, 'age'=>2, 'sex'=>1, 'name'=>'d'),\n);\n\nprint_r(arrayOrderBy($arr, 'age asc,sex asc,name desc'));\n\nfunction arrayOrderBy(array &amp;$arr, $order = null) {\n    if (is_null($order)) {\n        return $arr;\n    }\n    $orders = explode(',', $order);\n    usort($arr, function($a, $b) use($orders) {\n        $result = array();\n        foreach ($orders as $value) {\n            list($field, $sort) = array_map('trim', explode(' ', trim($value)));\n            if (!(isset($a[$field]) &amp;&amp; isset($b[$field]))) {\n                continue;\n            }\n            if (strcasecmp($sort, 'desc') === 0) {\n                $tmp = $a;\n                $a = $b;\n                $b = $tmp;\n            }\n            if (is_numeric($a[$field]) &amp;&amp; is_numeric($b[$field]) ) {\n                $result[] = $a[$field] - $b[$field];\n            } else {\n                $result[] = strcmp($a[$field], $b[$field]);\n            }\n        }\n        return implode('', $result);\n    });\n    return $arr;\n}\n?>\n\noutput:\nArray\n(\n    [0] => Array\n        (\n            [id] => 1\n            [age] => 1\n            [sex] => 6\n            [name] => a\n        )\n\n    [1] => Array\n        (\n            [id] => 4\n            [age] => 2\n            [sex] => 1\n            [name] => d\n        )\n\n    [2] => Array\n        (\n            [id] => 2\n            [age] => 3\n            [sex] => 1\n            [name] => c\n        )\n\n    [3] => Array\n        (\n            [id] => 3\n            [age] => 3\n            [sex] => 1\n            [name] => b\n        )\n\n)</code></pre>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>From: http://php.net/manual/en &#8230;</p>\n",
                "protected": false
            },
            "author": 2,
            "featured_media": 0,
            "comment_status": "open",
            "ping_status": "closed",
            "sticky": false,
            "template": "",
            "format": "standard",
            "meta": [],
            "categories": [
                222
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2842"
                    }
                ],
                "collection": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/comments?post=2842"
                    }
                ],
                "version-history": [
                    {
                        "count": 2,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2842/revisions"
                    }
                ],
                "predecessor-version": [
                    {
                        "id": 2844,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2842/revisions/2844"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media?parent=2842"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/categories?post=2842"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/tags?post=2842"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 2839,
            "date": "2018-11-28T04:21:12",
            "date_gmt": "2018-11-27T20:21:12",
            "guid": {
                "rendered": "http://www.yaoin.net/?p=2839"
            },
            "modified": "2018-11-28T04:21:12",
            "modified_gmt": "2018-11-27T20:21:12",
            "slug": "vue-using-localstorage-with-vuex-store",
            "status": "publish",
            "type": "post",
            "link": "https://src.yaoin.net/blog/2018/11/28/vue-using-localstorage-with-vuex-store/",
            "title": {
                "rendered": "Vue: Using localStorage with Vuex store"
            },
            "content": {
                "rendered": "\n<p><em>This tutorial uses Vue v2.4.4 and Vuex v2.5.0 &#8211; although I&#8217;m sure it will work with previous versions</em></p>\n\n\n\n<h2>localStorage basics<a href=\"https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store#localStorage-basics\">#</a></h2>\n\n\n\n<p><code>localStorage</code> is a cache in the browser which persists even after the browser is closed. It allows you to store data on a page and later access it &#8211; it&#8217;s especially easy to do using JavaScript. More information about <code>localStorage</code> can be found on the <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage\">MDN Website</a>, but the basics are as follows. The <code>key</code> is an identifiable string for you to access the saved data later.</p>\n\n\n\n<pre class=\"wp-block-code\"><code>// Store the \"value\" under the ID of \"key\"\nlocalStorage.setItem('key', 'value');\n\n// Load the data back and store as a variable\nlet val = localStorage.getItem('key');\n// val will equal \"value\"</code></pre>\n\n\n\n<p><strong>Note:</strong></p>\n\n\n\n<p><code>localStorage</code> can <em>only</em> contain strings. This means that any objects or arrays you wish to store in <code>localStorage</code> must be converted to a JSON string, and then re-formatted when you retrieve them.</p>\n\n\n\n<p>For example:</p>\n\n\n\n<pre class=\"wp-block-code\"><code> // Convert the object into a JSON string and store\nlocalStorage.setItem('key', JSON.stringify(object));\n\n// Retrieve the data and convert from JSOn string to object/array\nlet obj = JSON.parse(localStorage.getItem('key'));</code></pre>\n\n\n\n<h2>Vuex<a href=\"https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store#vuex\">#</a></h2>\n\n\n\n<p><a href=\"https://vuex.vuejs.org/en/\">Vuex</a> is a centralised state management tool for Vue. It gives you a central store that all of your components can access, update and react to changes. Unless you are doing a very simple (in functionality) Vue app, it is highly recommended you use Vuex for all of the management of your data and states.</p>\n\n\n\n<h2>Using localStorage with Vuex<a href=\"https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store#using-localStorage-with-vuex\">#</a></h2>\n\n\n\n<p>On the latest Vue app I&#8217;m developing, I wanted the Vuex contents (or <code>state</code>) to be stored in <code>localStorage</code> whenever it was updated. This meant that at any time the user could close their browser and, when they return, have the app in the same state as when they left it. Be it products in the basket or user preferences, I wanted the app to remember what they had chosen.</p>\n\n\n\n<h3>Initialise the store<a href=\"https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store#initialise-the-store\">#</a></h3>\n\n\n\n<p>If you&#8217;re reading this I would assume you&#8217;ve got your store already initialised. However you&#8217;ve built your app, the <em>store</em> should have a variable assigned to it.</p>\n\n\n\n<pre class=\"wp-block-code\"><code>// Initialise your store\nconst store new Vuex.Store({\n\t// You state might be more complex than this\n\tstate: {\n\t\tcount: 1\n\t},\n\tmutations: {},\n\tgetters: {}\n});</code></pre>\n\n\n\n<h3>Storing data<a href=\"https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store#storing-data\">#</a></h3>\n\n\n\n<p>We now wish to cache the data whenever the store updated. Fortunately, Vuex offers a <code>subscribe</code>function which triggers whenever the store updates.</p>\n\n\n\n<p><em>After</em> your store has been initialised, register the subscribe method on your <code>store</code> variable. This function accepts two parameters &#8211; the mutation which was fired and the state <em>after</em> the mutation. We wish to store this state in our <code>localStorage</code>. As <code>localStorage</code> is specific to each domain name, we can use a variable name to reference the contents &#8211; such as <code>store</code>. Don&#8217;t forget to convert your object to a string.</p>\n\n\n\n<pre class=\"wp-block-code\"><code>// Subscribe to store updates\nstore.subscribe((mutation, state) => {\n\t// Store the state object as a JSON string\n\tlocalStorage.setItem('store', JSON.stringify(state));\n});</code></pre>\n\n\n\n<h3>Retrieving data<a href=\"https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store#retrieving-data\">#</a></h3>\n\n\n\n<p>With our data now stored with every update, we need to retrieve the data on page load. When the user re-accesses the app, we need to replace the existing, empty store with the contents of our storage.</p>\n\n\n\n<p>To do this, we are going to create a mutation within the store, which updates the state, and trigger this when the app is created.</p>\n\n\n\n<p>Create a new mutation called <code>initialiseStore</code>. Inside this mutation, check if the <code>localStorage</code>item exists</p>\n\n\n\n<pre class=\"wp-block-code\"><code>const store new Vuex.Store({\n\tstate: {\n\t\tcount: 1\n\t},\n\tmutations: {\n\t\tinitialiseStore(state) {\n\t\t\t// Check if the ID exists\n\t\t\tif(localStorage.getItem('store')) {\n\t\t\t\t\n\t\t\t}\n\t\t}\n\t},\n\tgetters: {}\n});</code></pre>\n\n\n\n<p>We now need to replace the current state if it does exist. To do this, we are going to use the <code>replaceState</code> Vuex method. Within here, we are going to merge both the current, blank, state and the stored data. The reason for this is so that if there are any new properties which were added since the last time the user visited, they don&#8217;t get any dreaded <code>undefined</code> errors.</p>\n\n\n\n<pre class=\"wp-block-code\"><code>const store new Vuex.Store({\n\tstate: {\n\t\tcount: 1\n\t},\n\tmutations: {\n\t\tinitialiseStore(state) {\n\t\t\t// Check if the ID exists\n\t\t\tif(localStorage.getItem('store')) {\n\t\t\t\t// Replace the state object with the stored item\n\t\t\t\tthis.replaceState(\n\t\t\t\t\tObject.assign(state, JSON.parse(localStorage.getItem('store')))\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t},\n\tgetters: {}\n});</code></pre>\n\n\n\n<p>The last stage is to call this mutation when the Vue app is created. We want this to happen at the <em>earliest</em>point which, based on the <a href=\"https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram\">Vue lifecycle hooks</a> is during the <code>beforeCreate()</code> method.</p>\n\n\n\n<p>Add this method to your Vue instance and trigger the mutation:</p>\n\n\n\n<pre class=\"wp-block-code\"><code>new Vue({\n\tel: '#app',\n\n\tstore,\n\n\tbeforeCreate() {\n\t\tthis.$store.commit('initialiseStore');\n\t}\n});</code></pre>\n\n\n\n<p>Huzzah! You now have an app with a Vuex store cached in <code>localStorage</code>.</p>\n\n\n\n<hr class=\"wp-block-separator\"/>\n\n\n\n<p><strong>Update 20/10/17</strong></p>\n\n\n\n<h2>Cache Validity<a href=\"https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store#cache-validity\">#</a></h2>\n\n\n\n<p>While using this in a project recently, I experienced an odd sensation where changes I made were not being reflected. This is because I had altered the <code>store</code> structure without clearing my <code>localStorage</code>. Adding values was fine, but renaming, editing or altering a value&#8217;s type did not change.</p>\n\n\n\n<p>Although not an issue for me, as I can clear the cache, if some code were to be pushed live, this could affect users who had visited the site before.</p>\n\n\n\n<p>Fortunately, I was using <a href=\"http://semver.org/\">semver</a> for my versioning (and even if you&#8217;re not &#8211; this will work as long as you version each release somehow) and so I could call upon ver version number to check if the store was up to date.</p>\n\n\n\n<p>If on load, the user had the same version number as that of my app, then the cache was fine. If it&#8217;s different, clear the cache and load a new version.</p>\n\n\n\n<p><strong>Be warned</strong> This will clear the <em>whole</em> cache, so if you are relying on it for user preferences or similar, you may wish to do the selective deletion.</p>\n\n\n\n<p>The first step is to load our version number. Ours is stored in the <code>package.json</code> so, using ES6, this is as simple as:</p>\n\n\n\n<pre class=\"wp-block-code\"><code>import {version} from './package.json';</code></pre>\n\n\n\n<p>However, you may wish to cache yours from a git tag or have it somewhere as a variable. Ideally, it needs to be accessed separately from the store so that the cache doesn&#8217;t end up overwriting it.</p>\n\n\n\n<p>Next, create an empty string in your store &#8211; for the version to be saved once verified.</p>\n\n\n\n<pre class=\"wp-block-code\"><code>state: {\n\t// Cache version\n\tversion: '',\n\tcount: 1\n},</code></pre>\n\n\n\n<p>We can now update our <code>initialiseStore</code> mutation to check the version with that of the one in the cache and take appropriate action based on the result</p>\n\n\n\n<pre class=\"wp-block-code\"><code>initialiseStore(state) {\n\t// Check if the store exists\n\tif(localStorage.getItem('store')) {\n\t\tlet store = JSON.parse(localStorage.getItem('store'));\n\t\t\n\t\t// Check the version stored against current. If different, don't\n\t\t// load the cached version\n\t\tif(store.version == version) {\n\t\t\tthis.replaceState(\n\t\t\t\tObject.assign(state, store)\n\t\t\t);\n\t\t} else {\n\t\t\tstate.version = version;\n\t\t}\n\t}\n}</code></pre>\n\n\n\n<hr class=\"wp-block-separator\"/>\n\n\n\n<p><strong>Update 25/10/17</strong></p>\n\n\n\n<h2>Selective Caching<a href=\"https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store#selective-caching\">#</a></h2>\n\n\n\n<p>You may only wish to cache a few elements from your store, this can be achieved by creating a new object in your <code>subscribe</code> function and storing that. We are already merging the cache with the current store state on load, so that doesn&#8217;t need to change.</p>\n\n\n\n<pre class=\"wp-block-code\"><code>store.subscribe((mutation, state) => {\n\tlet store = {\n\t\tversion: state.version,\n\t\tcount: 1\n\t};\n\n\tlocalStorage.setItem('store', JSON.stringify(store));\n});</code></pre>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>This tutorial uses Vue v2.4.4  &#8230;</p>\n",
                "protected": false
            },
            "author": 2,
            "featured_media": 0,
            "comment_status": "open",
            "ping_status": "closed",
            "sticky": false,
            "template": "",
            "format": "standard",
            "meta": [],
            "categories": [
                222
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2839"
                    }
                ],
                "collection": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/comments?post=2839"
                    }
                ],
                "version-history": [
                    {
                        "count": 1,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2839/revisions"
                    }
                ],
                "predecessor-version": [
                    {
                        "id": 2841,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2839/revisions/2841"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media?parent=2839"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/categories?post=2839"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/tags?post=2839"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 2827,
            "date": "2018-09-07T11:19:34",
            "date_gmt": "2018-09-07T03:19:34",
            "guid": {
                "rendered": "http://www.yaoin.net/?p=2827"
            },
            "modified": "2018-09-07T11:19:34",
            "modified_gmt": "2018-09-07T03:19:34",
            "slug": "è\u0087ªé\u0099¤æ\u0095°",
            "status": "publish",
            "type": "post",
            "link": "https://src.yaoin.net/blog/2018/09/07/è\u0087ªé\u0099¤æ\u0095°/",
            "title": {
                "rendered": "自除数"
            },
            "content": {
                "rendered": "\n<p><em>自除数</em> 是指可以被它包含的每一位数除尽的数。</p>\n\n\n\n<p>例如，128 是一个自除数，因为 <code>128 % 1 == 0</code>，<code>128 % 2 == 0</code>，<code>128 % 8 == 0</code>。</p>\n\n\n\n<p>还有，自除数不允许包含 0 。</p>\n\n\n\n<p>给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。</p>\n\n\n\n<pre class=\"wp-block-preformatted\"><strong>输入：</strong> \n上边界left = 1, 下边界right = 22\n<strong>输出：</strong> [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]\n\n</pre>\n\n\n\n<pre class=\"wp-block-code\"><code>&lt;script>\n\n    /**\n     * @param {number} left\n     * @param {number} right\n     * @return {number[]}\n     */\n    var selfDividingNumbers = function(left, right) {\n\n        var dividing_numbers = [];\n\n        function init(){\n            for(number = left; number &lt;= right; number ++ ){\n\n                if(is_dividing_number(number)){\n                    dividing_numbers.push(number);\n                }\n            }\n            console.log(dividing_numbers)\n        }\n\n        function is_dividing_number(number){\n\n            if(number.toString().indexOf('0') > 0){\n                return false;\n            }\n\n            if(number &lt; 10){\n                return true;\n            } else {\n                var number_array = number.toString().split(''),\n                    status = 0\n                number_array.forEach(function(divid_number) {\n                    if( number % parseInt(divid_number) > 0 ){\n                        status++\n                    }\n                });\n\n                if(status > 0 ){\n                    return false;\n                } else {\n                    return true;\n                }\n            }\n        }\n        init();\n    };\n\n    selfDividingNumbers(127, 128)\n\n&lt;/script></code></pre>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>自除数 是指可以被它包含的每一位数除尽的数。 例如，128  &#8230;</p>\n",
                "protected": false
            },
            "author": 2,
            "featured_media": 0,
            "comment_status": "open",
            "ping_status": "closed",
            "sticky": false,
            "template": "",
            "format": "standard",
            "meta": [],
            "categories": [
                222
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2827"
                    }
                ],
                "collection": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/comments?post=2827"
                    }
                ],
                "version-history": [
                    {
                        "count": 1,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2827/revisions"
                    }
                ],
                "predecessor-version": [
                    {
                        "id": 2828,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2827/revisions/2828"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media?parent=2827"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/categories?post=2827"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/tags?post=2827"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 2788,
            "date": "2016-03-23T15:15:20",
            "date_gmt": "2016-03-23T07:15:20",
            "guid": {
                "rendered": "http://yaoin.net/?p=2788"
            },
            "modified": "2016-03-23T15:15:20",
            "modified_gmt": "2016-03-23T07:15:20",
            "slug": "è\u0087ªå\u008a¨è®¾ç½®å\u0086\u0085å®¹é\u0087\u008cç\u009a\u0084ç¬¬ä¸\u0080å¼ å\u009b¾ç\u0089\u0087ä¸ºç\u0089¹è\u0089²å\u009b¾ç\u0089\u0087ï¼\u008cå¹¶ä¸\u008aä¼ ",
            "status": "publish",
            "type": "post",
            "link": "https://src.yaoin.net/blog/2016/03/23/è\u0087ªå\u008a¨è®¾ç½®å\u0086\u0085å®¹é\u0087\u008cç\u009a\u0084ç¬¬ä¸\u0080å¼ å\u009b¾ç\u0089\u0087ä¸ºç\u0089¹è\u0089²å\u009b¾ç\u0089\u0087ï¼\u008cå¹¶ä¸\u008aä¼ /",
            "title": {
                "rendered": "自动设置内容里的第一张图片为特色图片，并上传到Aliyun OSS"
            },
            "content": {
                "rendered": "<p>本文章测试于 WordPress 4.4.2</p>\n<p>这儿需要用的两个插件</p>\n<ol>\n<li>阿里云附件存储 [http://yii.im/posts/aliyun-oss-support-plugin-for-wordpress]</li>\n<li>Auto Post Thumbnail [https://wordpress.org/plugins/auto-post-thumbnail/]</li>\n</ol>\n<p>接下来 要对 auto post thumbnail 里的函数 apt_generate_post_thumb 稍作修改，将文件下载保存在本地替换成使用 wp_handle_sideload 上传到OSS</p>\n<pre class=\"lang:php decode:true\" title=\"apt_generate_post_thumb\">/**\r\n * Function to fetch the image from URL and generate the required thumbnails\r\n */\r\nfunction apt_generate_post_thumb($matches, $key, $post_content, $post_id)\r\n{\r\n    // Make sure to assign correct title to the image. Extract it from img tag\r\n    $imageTitle = '';\r\n    preg_match_all('/&lt;\\s*img [^\\&gt;]*title\\s*=\\s*[\\\"\"\\']?([^\\\"\"\\'&gt;]*)/i', $post_content, $matchesTitle);\r\n\r\n    if (count($matchesTitle) &amp;&amp; isset($matchesTitle[1])) {\r\n        $imageTitle = $matchesTitle[1][$key];\r\n    }\r\n\r\n    // Get the URL now for further processing\r\n    $imageUrl = $matches[1][$key];\r\n\r\n    // Get the file name\r\n    $filename = substr($imageUrl, (strrpos($imageUrl, '/'))+1);\r\n\r\n    if (!(($uploads = wp_upload_dir(current_time('mysql')) ) &amp;&amp; false === $uploads['error'])) {\r\n        return null;\r\n    }\r\n\r\n    // Generate unique file name\r\n    $filename = wp_unique_filename( $uploads['path'], $filename );\r\n\r\n\r\n    // gives us access to the download_url() and wp_handle_sideload() functions\r\n    if ( ! function_exists( 'download_url' ) ) {\r\n        require_once( ABSPATH . 'wp-admin/includes/file.php' );\r\n    }\r\n\r\n    $timeout_seconds = 5;\r\n    // download file to temp dir\r\n    $temp_file = download_url( $imageUrl, $timeout_seconds );\r\n\r\n    if (!is_wp_error( $temp_file )) {\r\n        // array based on $_FILE as seen in PHP file uploads\r\n        $file = array(\r\n            'name' =&gt; basename($imageUrl), // ex: wp-header-logo.png\r\n            'type' =&gt; 'image/png',\r\n            'tmp_name' =&gt; $temp_file,\r\n            'error' =&gt; 0,\r\n            'size' =&gt; filesize($temp_file),\r\n        );\r\n\r\n        $overrides = array(\r\n            // tells WordPress to not look for the POST form\r\n            // fields that would normally be present, default is true,\r\n            // we downloaded the file from a remote server, so there\r\n            // will be no form fields\r\n            'test_form' =&gt; false,\r\n\r\n            // setting this to false lets WordPress allow empty files, not recommended\r\n            'test_size' =&gt; true,\r\n\r\n            // A properly uploaded file will pass this test.\r\n            // There should be no reason to override this one.\r\n            'test_upload' =&gt; true,\r\n        );\r\n\r\n        // move the temporary file into the uploads directory\r\n        $results = wp_handle_sideload( $file, $overrides );\r\n\r\n        if (!empty($results['error'])) {\r\n            // insert any error handling here\r\n            return null;\r\n        } else {\r\n\r\n            $filename   = $results['file']; // full path to the file\r\n            $local_url  = $results['url']; // URL to the file in the uploads dir\r\n            $type       = $results['type']; // MIME type of the file\r\n\r\n            $attachment = array(\r\n                'post_mime_type' =&gt; $type,\r\n                'guid' =&gt; $local_url,\r\n                'post_parent' =&gt; null,\r\n                'post_title' =&gt; $imageTitle,\r\n                'post_content' =&gt; '',\r\n            );\r\n\r\n            $thumb_id = wp_insert_attachment($attachment, $filename, $post_id);\r\n\r\n            if ( !is_wp_error($thumb_id) ) {\r\n                require_once(ABSPATH . '/wp-admin/includes/image.php');\r\n\r\n                // Added fix by misthero as suggested\r\n                wp_update_attachment_metadata( $thumb_id, wp_generate_attachment_metadata( $thumb_id, $filename ) );\r\n                update_attached_file( $thumb_id, $filename );\r\n\r\n                return $thumb_id;\r\n            }\r\n        }\r\n    }\r\n    return null;\r\n}\r\n</pre>\n<p>&nbsp;</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>本文章测试于 WordPress 4.4.2 这儿需要用的两 &#8230;</p>\n",
                "protected": false
            },
            "author": 2,
            "featured_media": 2789,
            "comment_status": "open",
            "ping_status": "open",
            "sticky": false,
            "template": "",
            "format": "standard",
            "meta": [],
            "categories": [
                381
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2788"
                    }
                ],
                "collection": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/comments?post=2788"
                    }
                ],
                "version-history": [
                    {
                        "count": 1,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2788/revisions"
                    }
                ],
                "predecessor-version": [
                    {
                        "id": 2790,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2788/revisions/2790"
                    }
                ],
                "wp:featuredmedia": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media/2789"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media?parent=2788"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/categories?post=2788"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/tags?post=2788"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 2778,
            "date": "2016-03-14T15:17:11",
            "date_gmt": "2016-03-14T07:17:11",
            "guid": {
                "rendered": "http://yaoin.net/?p=2778"
            },
            "modified": "2016-03-14T15:17:41",
            "modified_gmt": "2016-03-14T07:17:41",
            "slug": "5ä¸ªç\u0091\u009cä¼½å\u008a¨ä½\u009cæ\u009d¥å¢\u009eå¼ºä¸\u008aè\u0082¢deå\u008a\u009bé\u0087\u008få\u0092\u008cç\u0081µæ´»æ\u0080§",
            "status": "publish",
            "type": "post",
            "link": "https://src.yaoin.net/blog/2016/03/14/5ä¸ªç\u0091\u009cä¼½å\u008a¨ä½\u009cæ\u009d¥å¢\u009eå¼ºä¸\u008aè\u0082¢deå\u008a\u009bé\u0087\u008få\u0092\u008cç\u0081µæ´»æ\u0080§/",
            "title": {
                "rendered": "5个瑜伽动作来增强上肢de力量和灵活性"
            },
            "content": {
                "rendered": "<p><em>每个月,瑜伽教练温格劳伦斯向我们展示了五个瑜伽姿势设计让运动员在比赛中。春天马上开始,她将专注于完美的瑜伽姿势加强和延伸的肩膀。</em></p>\n<p>当人们想到肩膀锻炼,经常按和引体向上,加强前面的肩膀。但这是一个三维联合,需要更多的关注。</p>\n<p>大多数体育肆虐在肩膀上,穿着和过度使用关节疼痛和紧张。从接收器到外野手到游泳者,维持全系列的肩膀运动通过强度和灵活性是运动成功的关键。</p>\n<p>这里有一些对帮助使整个肩膀面积更柔软和强劲的四面八方。(像往常一样,去看医生之前,你开始任何新的运动项目。)</p>\n<h2>Happy Cow Arms</h2>\n<p><img class=\"alignnone size-full wp-image-2779\" src=\"http://yaoin.net/wp-content/uploads/2016/03/r61623_2_800x450_16-9.jpg\" alt=\"r61623_2_800x450_16-9\" width=\"800\" height=\"450\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/03/r61623_2_800x450_16-9.jpg 800w, https://src.yaoin.net/wp-content/uploads/2016/03/r61623_2_800x450_16-9-300x169.jpg 300w, https://src.yaoin.net/wp-content/uploads/2016/03/r61623_2_800x450_16-9-696x392.jpg 696w, https://src.yaoin.net/wp-content/uploads/2016/03/r61623_2_800x450_16-9-747x420.jpg 747w\" sizes=\"(max-width: 800px) 100vw, 800px\" /></p>\n<p>不是传统的最喜欢的在我的运动员,但是这个姿势做的双重任务。打开底部的手臂和肩膀以及加强小脊柱的肌肉。你可以站着或坐着。</p>\n<h3>关键姿势</h3>\n<p>*到达天空你的右臂,右手拿着皮带。</p>\n<p>*右手肘弯曲,拍拍自己的背。</p>\n<p>*降低左臂在你身边,左手肘弯曲,爬的左手接近正确的皮带。持有和呼吸。(有一天你不需要带,你就可以抓住手或手腕,如上图)。重复在另一边。</p>\n<p>*每一方至少两分钟,放松肩膀的紧绷的地方。</p>\n<p>*一个很酷的变化就是这样做，躺在手臂上，这样你的身体会让你在这个位置上。</p>\n<h2>Plank</h2>\n<p><img class=\"alignnone size-full wp-image-2780\" src=\"http://yaoin.net/wp-content/uploads/2016/03/espnw_e_plank_800x450.jpg\" alt=\"espnw_e_plank_800x450\" width=\"800\" height=\"450\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/03/espnw_e_plank_800x450.jpg 800w, https://src.yaoin.net/wp-content/uploads/2016/03/espnw_e_plank_800x450-300x169.jpg 300w, https://src.yaoin.net/wp-content/uploads/2016/03/espnw_e_plank_800x450-696x392.jpg 696w, https://src.yaoin.net/wp-content/uploads/2016/03/espnw_e_plank_800x450-747x420.jpg 747w\" sizes=\"(max-width: 800px) 100vw, 800px\" /></p>\n<p>瑜伽主要本质上是在一个俯卧撑和加强肩关节工作时胸部和abs。</p>\n<h3>关键姿势</h3>\n<p>*在你的手和膝盖开始,确保你的手腕是在你的肩膀和你的手腕是在90度角。</p>\n<p>*把脚趾和膝盖伸直,解除他们离开地面。</p>\n<p>*双手把地板和腹肌紧张,保持你的身体在一行。没有下垂的臀部和臀部。</p>\n<p>*的关键是保持一到两分钟,建筑通过静态强度。</p>\n<h2>Face-Up Shoulder Stretch</h2>\n<p><img class=\"alignnone size-full wp-image-2781\" src=\"http://yaoin.net/wp-content/uploads/2016/03/i.jpeg\" alt=\"i\" width=\"800\" height=\"450\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/03/i.jpeg 800w, https://src.yaoin.net/wp-content/uploads/2016/03/i-300x169.jpeg 300w, https://src.yaoin.net/wp-content/uploads/2016/03/i-696x392.jpeg 696w, https://src.yaoin.net/wp-content/uploads/2016/03/i-747x420.jpeg 747w\" sizes=\"(max-width: 800px) 100vw, 800px\" /></p>\n<p>我喜欢使用这对所有运动员的姿势，因为它被定位在前面的肩膀，在确切的地区，贫困的姿态往往显示其脸。它让耷拉着肩膀。</p>\n<h3>关键姿势</h3>\n<p>*开始仰卧,两膝弯曲,足平放,慢慢弯曲右手肘这对身体形成一个图4。</p>\n<p>*你的右手应该在你的背部,手掌平放在地板上,手指扩展。</p>\n<p>*仔细,开始下降弯曲膝盖朝着正确的直到你感觉到阻力。坚持工作,并且有一天你的肩胛骨会平放于地面</p>\n<p>*增加拉伸,吸引更多的膝盖胎儿的位置。重复在另一边。</p>\n<p>*保持两边两到四分钟,呼吸紧点。</p>\n<p>*确保你在一个安全的地方没人会把你推到这个姿势。在这扭曲的位置您将没有足够的动力去深但肩关节浅所以即使是最轻微的推从另一个人或宠物可能会损害。</p>\n<h2>Inverted table</h2>\n<p><img class=\"alignnone size-full wp-image-2782\" src=\"http://yaoin.net/wp-content/uploads/2016/03/Inverted-table.jpeg\" alt=\"Inverted table\" width=\"800\" height=\"450\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/03/Inverted-table.jpeg 800w, https://src.yaoin.net/wp-content/uploads/2016/03/Inverted-table-300x169.jpeg 300w, https://src.yaoin.net/wp-content/uploads/2016/03/Inverted-table-696x392.jpeg 696w, https://src.yaoin.net/wp-content/uploads/2016/03/Inverted-table-747x420.jpeg 747w\" sizes=\"(max-width: 800px) 100vw, 800px\" /></p>\n<p>而板材将照顾前面的肩膀,反向表将在平衡工作,通过加强的肩膀。提出了将打开的两个手腕。</p>\n<h3>关键姿势</h3>\n<p>*开始在一个坐着的位置,两膝弯曲,足平放。</p>\n<p>*转动肩膀和背部,肩胛骨挤压在一起支持你。</p>\n<p>*向后倾斜,双手平放在地板上,双手平,手指传播。</p>\n<p>*把整个手插到地上,按整个脚,开始提升你的臀部尽可能高,最终你的肩膀。</p>\n<p>*如果你感觉舒适,减少你的头。</p>\n<p>*保持这个姿势每次一到两分钟,把地板,定位你的手臂手腕肩关节下是正确的。</p>\n<h2>Downward Dog</h2>\n<p><img class=\"alignnone size-full wp-image-2783\" src=\"http://yaoin.net/wp-content/uploads/2016/03/Downward-Dog.jpeg\" alt=\"Downward Dog\" width=\"800\" height=\"450\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/03/Downward-Dog.jpeg 800w, https://src.yaoin.net/wp-content/uploads/2016/03/Downward-Dog-300x169.jpeg 300w, https://src.yaoin.net/wp-content/uploads/2016/03/Downward-Dog-696x392.jpeg 696w, https://src.yaoin.net/wp-content/uploads/2016/03/Downward-Dog-747x420.jpeg 747w\" sizes=\"(max-width: 800px) 100vw, 800px\" /></p>\n<p>狗是瑜伽的基本动作,但听起来极其重要的结构和肩关节的稳定性。这是一个伟大的姿势从许多不同的角度解决联合。</p>\n<h3>关键姿势</h3>\n<p>*开始你的手和膝盖,双手与肩同宽,手心平坦和手指每个手指之间平等的空间传播。</p>\n<p>*把你的脚趾,伸直双腿。</p>\n<p>*俯视和鞋袜。确保你的脚和你要沉的高跟鞋在地板上。这不是重要的力量碰地上的高跟鞋。</p>\n<p>*如果你的腿筋紧,膝盖稍微弯曲。有一天你将能够成为没有施压脊柱伸直。</p>\n<p>*保持双臂直,并试图消除压力在脖子和肩膀。轻轻推开地板。</p>\n<p>*保持这个姿势一到两分钟真正建立声音强度和肩关节的灵活性。</p>\n<p><em>格温劳伦斯拥有力量瑜伽运动和与运动员在职业篮球,足球,棒球,曲棍球和足球运动员以及学院的冠军。跟着她在Twitter和Instagram @gwenlawrence和www.gwenlawrence.com。</em></p>\n<p>from:http://espn.go.com/espnw/training/article/14934600/stretch-5-yoga-poses-shoulder-strength-flexibility</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>每个月,瑜伽教练温格劳伦斯向我们展示了五个瑜伽姿势设计让运动 &#8230;</p>\n",
                "protected": false
            },
            "author": 2,
            "featured_media": 2783,
            "comment_status": "open",
            "ping_status": "open",
            "sticky": false,
            "template": "",
            "format": "standard",
            "meta": [],
            "categories": [
                8
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2778"
                    }
                ],
                "collection": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/comments?post=2778"
                    }
                ],
                "version-history": [
                    {
                        "count": 2,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2778/revisions"
                    }
                ],
                "predecessor-version": [
                    {
                        "id": 2785,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2778/revisions/2785"
                    }
                ],
                "wp:featuredmedia": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media/2783"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media?parent=2778"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/categories?post=2778"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/tags?post=2778"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 2768,
            "date": "2016-03-08T23:48:36",
            "date_gmt": "2016-03-08T15:48:36",
            "guid": {
                "rendered": "http://yaoin.net/?p=2768"
            },
            "modified": "2016-03-09T13:34:30",
            "modified_gmt": "2016-03-09T05:34:30",
            "slug": "å¯¹äº\u008eç»´å¤\u009aå\u0088©äº\u009aé\u0098¿ä¼¦æ\u009d¥è¯´ï¼\u008conerepublicç\u009a\u0084æ\u00ad\u008cå°±æ\u0098¯ä¸\u0080å\u0088\u0087ï¼\u0081",
            "status": "publish",
            "type": "post",
            "link": "https://src.yaoin.net/blog/2016/03/08/å¯¹äº\u008eç»´å¤\u009aå\u0088©äº\u009aé\u0098¿ä¼¦æ\u009d¥è¯´ï¼\u008conerepublicç\u009a\u0084æ\u00ad\u008cå°±æ\u0098¯ä¸\u0080å\u0088\u0087ï¼\u0081/",
            "title": {
                "rendered": "对于维多利亚阿伦来说，OneRepublic的歌就是一切！"
            },
            "content": {
                "rendered": "<p>http://espn.go.com/espnw/life-style/article/14902355/why-onerepublic-songs-mean-everything-swimmer-victoria-arlen</p>\n<p><img class=\"alignnone size-full wp-image-2770\" src=\"http://yaoin.net/wp-content/uploads/2016/03/Victoria-Arlen.jpeg\" alt=\"Victoria Arlen\" width=\"799\" height=\"450\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/03/Victoria-Arlen.jpeg 799w, https://src.yaoin.net/wp-content/uploads/2016/03/Victoria-Arlen-300x169.jpeg 300w, https://src.yaoin.net/wp-content/uploads/2016/03/Victoria-Arlen-696x392.jpeg 696w, https://src.yaoin.net/wp-content/uploads/2016/03/Victoria-Arlen-746x420.jpeg 746w\" sizes=\"(max-width: 799px) 100vw, 799px\" /></p>\n<p>残奥会游泳健将维多利亚阿伦在她11岁时感染了一种罕见的疾病,陷入植物人状态近四年。不过,最终,她慢慢地从昏迷中醒来,学习说话、吃饭。但她再也无法使用她的双腿。</p>\n<p>2010年，阿伦在在游泳运动展示出竞争力,并在2012年残奥会赢得四枚奖牌(1枚金牌和3枚银牌)。</p>\n<p>现在是个体育评论员,<span class=\"s1\">演讲者</span>,演员和模特,这位21岁的波士顿女孩分享两首影响了她一生的歌曲:&#8221;I Lived&#8221; 和 &#8220;Good Life&#8221;,都来自美国流行乐队OneRepublic。</p>\n<p>“‘Good Life’是我的金牌的歌, 当需要集中注意力和保持冷静时候, 我会轻轻吟唱。”阿伦说。“她让我如此开心,我非常喜欢。”</p>\n<p>&#8220;I Lived&#8221; 对她来说，同样的重要！</p>\n<p>“这首歌象征着我的生命,”她说。“当这首歌想起，我的母亲和我总是随歌起舞, 有一个时刻。我幸存下来并得以恢复,继续做我做的事是一个奇迹, 而这首歌提示着我生活的意义。”</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>http://espn.go.com/espnw/life- &#8230;</p>\n",
                "protected": false
            },
            "author": 2,
            "featured_media": 2769,
            "comment_status": "open",
            "ping_status": "open",
            "sticky": false,
            "template": "",
            "format": "standard",
            "meta": [],
            "categories": [
                8
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2768"
                    }
                ],
                "collection": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/comments?post=2768"
                    }
                ],
                "version-history": [
                    {
                        "count": 4,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2768/revisions"
                    }
                ],
                "predecessor-version": [
                    {
                        "id": 2774,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2768/revisions/2774"
                    }
                ],
                "wp:featuredmedia": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media/2769"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media?parent=2768"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/categories?post=2768"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/tags?post=2768"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 2761,
            "date": "2016-03-05T20:18:55",
            "date_gmt": "2016-03-05T12:18:55",
            "guid": {
                "rendered": "http://www.yaoin.net/?p=2761"
            },
            "modified": "2016-03-05T20:24:31",
            "modified_gmt": "2016-03-05T12:24:31",
            "slug": "è¿\u0090å\u008a¨å\u0091\u0098ä»¬å\u0090\u0083ä»\u0080ä¹\u0088ï¼\u009amikaela-shiffrinæ\u009c\u0089å¦\u0088å¦\u0088ç\u009a\u0084é\u009d¢ï¼\u0081",
            "status": "publish",
            "type": "post",
            "link": "https://src.yaoin.net/blog/2016/03/05/è¿\u0090å\u008a¨å\u0091\u0098ä»¬å\u0090\u0083ä»\u0080ä¹\u0088ï¼\u009amikaela-shiffrinæ\u009c\u0089å¦\u0088å¦\u0088ç\u009a\u0084é\u009d¢ï¼\u0081/",
            "title": {
                "rendered": "运动员们吃什么：Mikaela Shiffrin有妈妈的面！"
            },
            "content": {
                "rendered": "<p>奥运金牌得主 Mikaela Shiffrin 缺席世界杯障碍滑雪赛电路的一个完整的12月崩溃造成了之后的两个月的恢复期在她的膝盖损伤和骨挫伤。她回来后一个强烈的康复过程,仅仅两周后回到了自己的滑雪板,她赢得了她的第一个世界杯比赛在克莱恩·蒙塔纳,瑞士。</p>\n<p>是什么神器般的把她带了回来? 这一定是她的训练用餐,妈妈的烤宽面条。她分享了她的最爱。</p>\n<p><img class=\"alignnone wp-image-2762 size-full\" src=\"http://www.yaoin.net/wp-content/uploads/2016/03/r59242-e1457180106867.png\" alt=\"\" width=\"900\" height=\"666\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/03/r59242-e1457180106867.png 900w, https://src.yaoin.net/wp-content/uploads/2016/03/r59242-e1457180106867-300x222.png 300w\" sizes=\"(max-width: 900px) 100vw, 900px\" /></p>\n<p>日期和时间:早晚餐后锻炼</p>\n<p>地点：科罗拉多州维尔的在家里</p>\n<p>我吃什么:我最喜欢的烤宽面条(母亲),西兰花,帕玛森芝士,混合坚果和水果</p>\n<p>其配方:我妈妈烤宽面条。她不遵循一个精确的配方,每次都是不同的,但是她做一个基本的、简单的烤宽面条。她用面食、奶酪代替马苏里拉奶酪,Italian-seasoned土耳其汉堡和瘦牛肉,奶酪,和酱。</p>\n<p>为什么:烤宽面条是超级简单,健康。我需要注意每一个卡路里,进入我的嘴里,但同时我希望我的食物味道很好。我妈妈的千层面合理数量的卡路里,很多精益蛋白质和钙,我需要恢复的碳水化合物从一个锻炼,准备下一个。</p>\n<p>我吃很多食物西兰花,因为它是一个奇迹——一个你可以吃健康的食物。它有钙、镁、维生素A、C、D,纤维,抗氧化剂——有人需要的一切,我现在需要治愈我的骨头擦伤和恢复期。这是一个显而易见的,首选食品的选择。</p>\n<p>我也喝了很多牛奶,特别是因为我的骨挫伤,帮助它钙化。我每餐都吃的坚果和种子。这里我有核桃、腰果和南瓜种子,因为混合提供锌和镁,这也是我需要健康和恢复。</p>\n<p><img class=\"alignnone size-full wp-image-2763\" src=\"http://www.yaoin.net/wp-content/uploads/2016/03/espnw_a_shiff_600x600.jpg\" alt=\"\" width=\"600\" height=\"600\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/03/espnw_a_shiff_600x600.jpg 600w, https://src.yaoin.net/wp-content/uploads/2016/03/espnw_a_shiff_600x600-150x150.jpg 150w, https://src.yaoin.net/wp-content/uploads/2016/03/espnw_a_shiff_600x600-300x300.jpg 300w, https://src.yaoin.net/wp-content/uploads/2016/03/espnw_a_shiff_600x600-50x50.jpg 50w\" sizes=\"(max-width: 600px) 100vw, 600px\" /></p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>奥运金牌得主 Mikaela Shiffrin 缺席世界杯障 &#8230;</p>\n",
                "protected": false
            },
            "author": 2,
            "featured_media": 2763,
            "comment_status": "open",
            "ping_status": "open",
            "sticky": false,
            "template": "",
            "format": "standard",
            "meta": [],
            "categories": [
                8
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2761"
                    }
                ],
                "collection": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/comments?post=2761"
                    }
                ],
                "version-history": [
                    {
                        "count": 1,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2761/revisions"
                    }
                ],
                "predecessor-version": [
                    {
                        "id": 2764,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2761/revisions/2764"
                    }
                ],
                "wp:featuredmedia": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media/2763"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media?parent=2761"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/categories?post=2761"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/tags?post=2761"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 2746,
            "date": "2016-02-07T04:52:58",
            "date_gmt": "2016-02-06T20:52:58",
            "guid": {
                "rendered": "http://www.yaoin.net/?p=2746"
            },
            "modified": "2016-02-07T05:03:27",
            "modified_gmt": "2016-02-06T21:03:27",
            "slug": "sports-wallpapers",
            "status": "publish",
            "type": "post",
            "link": "https://src.yaoin.net/blog/2016/02/07/sports-wallpapers/",
            "title": {
                "rendered": "Sports wallpapers"
            },
            "content": {
                "rendered": "<p><div id='gallery-1' class='gallery galleryid-2746 gallery-columns-2 gallery-size-medium'><figure class='gallery-item'>\n\t\t\t<div class='gallery-icon landscape'>\n\t\t\t\t<a href='https://src.yaoin.net/blog/2016/02/07/sports-wallpapers/sports-hd-wallpapers-by-techblogstop-33/'><img width=\"300\" height=\"169\" src=\"https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-33-300x169.jpg\" class=\"attachment-medium size-medium\" alt=\"\" aria-describedby=\"gallery-1-2752\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-33-300x169.jpg 300w, https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-33-1024x576.jpg 1024w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></a>\n\t\t\t</div>\n\t\t\t\t<figcaption class='wp-caption-text gallery-caption' id='gallery-1-2752'>\n\t\t\t\t测试一下1\n\t\t\t\t</figcaption></figure><figure class='gallery-item'>\n\t\t\t<div class='gallery-icon landscape'>\n\t\t\t\t<a href='https://src.yaoin.net/blog/2016/02/07/sports-wallpapers/sports-hd-wallpapers-by-techblogstop-26/'><img width=\"300\" height=\"225\" src=\"https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-26-300x225.jpg\" class=\"attachment-medium size-medium\" alt=\"\" aria-describedby=\"gallery-1-2751\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-26-300x225.jpg 300w, https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-26-1024x768.jpg 1024w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></a>\n\t\t\t</div>\n\t\t\t\t<figcaption class='wp-caption-text gallery-caption' id='gallery-1-2751'>\n\t\t\t\t篮球\n\t\t\t\t</figcaption></figure><figure class='gallery-item'>\n\t\t\t<div class='gallery-icon landscape'>\n\t\t\t\t<a href='https://src.yaoin.net/blog/2016/02/07/sports-wallpapers/sports-hd-wallpapers-by-techblogstop-23/'><img width=\"300\" height=\"188\" src=\"https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-23-300x188.jpg\" class=\"attachment-medium size-medium\" alt=\"\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-23-300x188.jpg 300w, https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-23-1024x640.jpg 1024w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></a>\n\t\t\t</div></figure><figure class='gallery-item'>\n\t\t\t<div class='gallery-icon landscape'>\n\t\t\t\t<a href='https://src.yaoin.net/blog/2016/02/07/sports-wallpapers/sports-hd-wallpapers-by-techblogstop-1-2/'><img width=\"300\" height=\"188\" src=\"https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-1-300x188.jpg\" class=\"attachment-medium size-medium\" alt=\"\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-1-300x188.jpg 300w, https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-1-1024x640.jpg 1024w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></a>\n\t\t\t</div></figure><figure class='gallery-item'>\n\t\t\t<div class='gallery-icon landscape'>\n\t\t\t\t<a href='https://src.yaoin.net/blog/2016/02/07/sports-wallpapers/sports-hd-wallpapers-by-techblogstop-4/'><img width=\"300\" height=\"169\" src=\"https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-4-300x169.jpg\" class=\"attachment-medium size-medium\" alt=\"\" srcset=\"https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-4-300x169.jpg 300w, https://src.yaoin.net/wp-content/uploads/2016/02/Sports-HD-Wallpapers-by-techblogstop-4-1024x576.jpg 1024w\" sizes=\"(max-width: 300px) 100vw, 300px\" /></a>\n\t\t\t</div></figure>\n\t\t</div>\n</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "",
                "protected": false
            },
            "author": 2,
            "featured_media": 2749,
            "comment_status": "open",
            "ping_status": "open",
            "sticky": false,
            "template": "",
            "format": "gallery",
            "meta": [],
            "categories": [
                222,
                223
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2746"
                    }
                ],
                "collection": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/comments?post=2746"
                    }
                ],
                "version-history": [
                    {
                        "count": 6,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2746/revisions"
                    }
                ],
                "predecessor-version": [
                    {
                        "id": 2757,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/posts/2746/revisions/2757"
                    }
                ],
                "wp:featuredmedia": [
                    {
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media/2749"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://src.yaoin.net/wp-json/wp/v2/media?parent=2746"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/categories?post=2746"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://src.yaoin.net/wp-json/wp/v2/tags?post=2746"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        }
    ]
}
const postsReducer = (state = initState, action) => {
    return state
}

export default postsReducer