import { useState } from "react";
import AppointmentAvailable from "../../Components/AppointmentAvailable/AppointmentAvailable";
import AppointmentCalender from "../../Components/AppointmentCalender/AppointmentCalender";
import Footer from "../../Components/Shared/Footer/Footer";
import Header from "../../Components/Shared/Header/Header";

const AppointmentPage = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Header />
      <main className="appointment-page ptb-100">
        <AppointmentCalender date={date} setDate={setDate} />
        <AppointmentAvailable date={date} setDate={setDate} />
      </main>
      <Footer />
    </>
  );
};

export default AppointmentPage;
