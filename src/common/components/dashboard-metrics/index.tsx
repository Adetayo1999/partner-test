import { DashboardCard, DashboardCardLoading } from "../dashboard-card";
import { PATHS } from "@common/routes/paths";
import { useEffect } from "react";
import { useAppSelector } from "@common/hooks/useAppSelector";
import { useAppDispatch } from "@common/hooks/useAppDispatch";
import { getSummaryThunk } from "@common/redux/reducers/summary/thunk";

export const DashboardMetrics = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.summary);

  useEffect(() => {
    dispatch(getSummaryThunk());
  }, [dispatch]);

  if (data == null || loading) {
    return (
      <div className="md:grid-cols-5 gap-4 grid">
        {[...Array(5).keys()].map((item) => (
          <DashboardCardLoading key={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="md:grid-cols-5 gap-4 grid">
      <DashboardCard
        title="Total Order"
        subText={`${data.total_order.total_count} txns`}
        metric={data.total_order.amount}
        currency={data.total_order.currency}
      />
      <DashboardCard
        title="Pending Txn"
        subText={`${data.pending_txn.total_count} txns`}
        metric={data.pending_txn.amount}
        link={PATHS.protected.transactions + "?type=pending"}
        currency={data.pending_txn.currency}
      />
      <DashboardCard
        title="Mismatched Txn"
        subText={`${data.mismatched_txn.total_count} txns`}
        metric={data.mismatched_txn.amount}
        link={PATHS.protected.transactions + "?type=mismatched"}
        currency={data.mismatched_txn.currency}
      />
      <DashboardCard
        title="Total Expired"
        subText={`${data.expired_txn.total_count} txns`}
        metric={data.expired_txn.amount}
        link={PATHS.protected.transactions + "?type=expired"}
        currency={data.expired_txn.currency}
      />
      <DashboardCard title="Total Users" metric={data.total_user} />
    </div>
  );
};
