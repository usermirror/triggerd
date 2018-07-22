---
id: example-kafka
title: Kafka Example
sidebar_label: Kafka
---

```yaml
# .triggerdrc
config:
  sources:
    spec:
    - plugin: kafka
      values:
        host: 127.0.0.1
        port: 9092
  actions:
    spec:
    - sources:
      - plugin: kafka
        topic: hello-world
      upstream:
        type: strict_dns
        connect_timeout_ms: 30
        hosts:
        - url: "http://localhost:8300"
```