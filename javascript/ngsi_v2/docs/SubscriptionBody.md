# NgsiV2.SubscriptionBody

## Properties

| Name             | Type                                                                | Description | Notes      |
| ---------------- | ------------------------------------------------------------------- | ----------- | ---------- |
| **description**  | **String**                                                          |             | [optional] |
| **subject**      | [**SubscriptionBodySubject**](SubscriptionBodySubject.md)           |             |
| **notification** | [**SubscriptionBodyNotification**](SubscriptionBodyNotification.md) |             |
| **expires**      | **Date**                                                            |             | [optional] |
| **status**       | **String**                                                          |             | [optional] |
| **throttling**   | **Number**                                                          |             | [optional] |

## Enum: StatusEnum

-   `active` (value: `"active"`)

-   `inactive` (value: `"inactive"`)
