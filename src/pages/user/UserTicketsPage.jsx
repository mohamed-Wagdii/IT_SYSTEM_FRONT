import { useEffect, useState } from "react";
import RequestForm from "../../components/UI/Form/TicketForm";
import RecentActivity from "../../components/RecentActivity";

export default function UserTicketsPage() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTickets = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:3000/api/tickets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (res.ok) {
      const formatted = data.tickets.map((t) => ({
        id: `#${t._id.slice(-4)}`,
        title: t.subject,
        submitted: new Date(t.createdAt).toDateString(),
        status: t.status,
      }));

      setTickets(formatted);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false); // 👈 مهم جدًا
  }
};


  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <RequestForm onTicketCreated={fetchTickets} />

      <div style={{ marginTop: "32px" }}>
        {loading ? (
          <p>Loading tickets...</p>
        ) : (
          <RecentActivity tickets={tickets} />
        )}
      </div>
    </div>
  );
}