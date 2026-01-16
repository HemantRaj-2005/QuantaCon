import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, AlertCircle, Info, CalendarDays } from "lucide-react";
import NOTIFICATIONS from "./notification.json";

interface Notification {
  id: string;
  title: string;
  date: string;
  category: "urgent" | "event" | "general";
  message: string;
}

const notifications = NOTIFICATIONS as Notification[];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "urgent":
      return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";
    case "event":
      return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
    default:
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "urgent":
      return <AlertCircle className="w-4 h-4 ml-1" />;
    case "event":
      return <CalendarDays className="w-4 h-4 ml-1" />;
    default:
      return <Info className="w-4 h-4 ml-1" />;
  }
};

export default function NotificationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <div className="relative pt-32 pb-20 px-4 md:px-8 mt-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-yellow-500 via-background to-background" />
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
          <Badge
            variant="outline"
            className="border-yellow-500/50 text-yellow-600 dark:text-yellow-400 px-6 py-2 text-base"
          >
            Communication Center
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground drop-shadow-lg">
            NOTIFICATIONS
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Stay updated with the latest announcements, mission updates, and
            critical alerts.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-24 space-y-6">
        {notifications.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground border-2 border-dashed rounded-xl">
            <Bell className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="text-lg">No active notifications</p>
          </div>
        ) : (
          notifications.map((note) => (
            <div
              key={note.id}
              className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                  note.category === "urgent"
                    ? "bg-red-500"
                    : note.category === "event"
                    ? "bg-green-500"
                    : "bg-blue-500"
                }`}
              />

              <div className="p-6 pl-8 flex flex-col md:flex-row gap-6 md:items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge
                      variant="outline"
                      className={getCategoryColor(note.category)}
                    >
                      {note.category.toUpperCase()}
                      {getCategoryIcon(note.category)}
                    </Badge>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      {new Date(note.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {note.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {note.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
