---
id: v1-triggerd-k8s
title: triggerd Kubernetes Definitions
sidebar_label: Kubernetes Definitions
---

Heres an example `Trigger` in Kubernetes:

```yaml
apiVersion: triggerd.org/v1beta1
kind: Trigger
metadata:
  name: example-trigger
spec:
  httpTrigger:
    port: 8080
    upstream:
      type: strict_dns
      connect_timeout_ms: 30
      lb_type: maglev
      hosts:
      - url: "tcp://some-service"
```