# ec2-metadata

utility for fetching ec2 instance metadata synchronously/asynchronously
lightweight alternative to ec2-metadata

```ts
import { getMetadataSync, getMetadata } from '@capaj/ec2-metadata'

getMetadataSync('instance-id') // === your ec2 instance id

await getMetadata('instance-id') // === your ec2 instance id
```
