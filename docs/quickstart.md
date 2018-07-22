---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
---

After [installing triggerd](/docs/installation.html), you can define a trigger that can send HTTP requests to one or more services. Here's a simple example running on our local computers:

```yaml
# .triggerdrc
config:
  sources:
    spec:
    - plugin: nsq
      values:
        host: 127.0.0.1
        port: 4161
  actions:
    spec:
    - sources:
      - plugin: nsq
        topic: hello-world
      upstream:
        type: strict_dns
        connect_timeout_ms: 30
        hosts:
        - url: "http://localhost:8300"
```

Then we can start the server with:

```shell
$ triggerd start
INFO[0000] Starting triggerd server                  addr="127.0.0.1:4284"
INFO[0002] Connected to NSQ                          addr="127.0.0.1:4161"
INFO[0006] Failed upstream              status="502" addr="localhost:8300"
```

Then we can start our hello world server:

```shell
$ python -m SimpleHTTPServer 8300
Serving HTTP on 0.0.0.0 port 8300 ...
```

Now, let's try pushing a calling our server through nsq:

```shell
$ curl -d '{"msg":"secret"}' 'http://127.0.0.1:4151/pub?topic=hello-world
```

Let's check the `triggerd` logs:

```shell
$ triggerd logs --level debug
INFO[0000] Starting triggerd server                  addr="127.0.0.1:4284"
INFO[0002] Connected to NSQ                          addr="127.0.0.1:4161"
INFO[0006] Failed upstream              status="502" addr="localhost:8300"
INFO[0128] Connected upstream           source="nsq" addr="localhost:8300"
```
