export type TRANSACTION_STATUS =
  | "completed"
  | "pending"
  | "mismatched"
  | "abandoned"
  | "expired";

export function getStatus(type: string) {
  const tx_status = [
    "abandoned",
    "completed",
    "expired",
    "mismatched",
    "pending",
  ];

  if (tx_status.includes(type)) {
    return type as TRANSACTION_STATUS;
  }

  return "pending";
}
