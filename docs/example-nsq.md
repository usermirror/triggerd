---
id: example-nsq
title: NSQ Example
sidebar_label: NSQ
---

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