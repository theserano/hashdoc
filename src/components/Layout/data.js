import dashboard from "../../assets/nav/dashboard.svg";
import appointments from "../../assets/nav/appointment.svg";
import medical from "../../assets/nav/medical.svg";
import settings from "../../assets/nav/settings.svg";


export const sideNavItems = [
    {
        id: 0,
        title: "Dashboard",
        link: "/patient-profile",
        icon: dashboard
    },
    {
        id: 1,
        title: "My Appointments",
        link: "/healthcare-settings",
        icon: appointments
    },
    {
        id: 2,
        title: "Medical Records",
        link: "/patient-medical-record",
        icon: medical
    },
    {
        id: 3,
        title: "Settings",
        link: "/",
        icon: settings
    },
];

export const sideNavItemsHC = [
    {
        id: 0,
        title: "Patients",
        link: "/patient-home",
        icon: dashboard
    },
    {
        id: 1,
        title: "Appointments",
        link: "/healthcare-dashboard",
        icon: appointments
    },
    {
        id: 3,
        title: "Settings",
        link: "/healthcare-settings",
        icon: settings
    },
];
