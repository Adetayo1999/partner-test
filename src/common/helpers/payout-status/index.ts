export type PAYOUT_STATUS = "completed" | "initiated" | "failed";

export function getStatus(type: string) {
  const tx_status = ["completed", "initiated", "failed"];

  if (tx_status.includes(type)) {
    return type as PAYOUT_STATUS;
  }

  return "initiated";
}
