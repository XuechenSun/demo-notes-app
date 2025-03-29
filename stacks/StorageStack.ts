import { Bucket, StackContext, Table } from "sst/constructs";

export function StorageStack({ stack }: StackContext) {
  // Create the DynamoDB table
  //我们正在使用 SST 的Table构造来创建我们的 DynamoDB 表。
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });
  //使用 SSTBucket构造创建一个新的 S3 存储桶
  const bucket = new Bucket(stack, "Uploads");
  //返回正在公开创建的表。
  return {
    bucket,
    table,
  };
}
