import RequestForm from "../components/UI/Form/TicketForm";
import RecentActivity from "../components/RecentActivity";

const mockTickets = [
  { id: "#4402", title: "VPN Connection Drops Automatically", submitted: "Submitted Oct 24, 2023", status: "In Progress" },
  { id: "#4399", title: "Software Request: Adobe Creative Cloud", submitted: "Submitted Oct 22, 2023", status: "Pending Approval" },
  { id: "#4355", title: "Monitor Replacement - Desk 4B", submitted: "Submitted Oct 18, 2023", status: "Resolved" },
];

const TicketsPage = () => {
  return (
    <div>
      <RequestForm />
      <div style={{ marginTop: "32px" }}>
        <RecentActivity tickets={mockTickets} />
      </div>
    </div>
  );
};

export default TicketsPage;
