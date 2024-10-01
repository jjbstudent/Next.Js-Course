// Importing the SideNav component from the specified path in the dashboard's UI folder
import SideNav from '@/app/ui/dashboard/sidenav';

// The Layout component takes children as a prop (which can be any React elements passed into it)
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // A container with flexbox that adjusts layout depending on screen size
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      
      {/* Sidebar section for navigation; full width on small screens, fixed width on medium and larger */}
      <div className="w-full flex-none md:w-64">
        <SideNav /> {/* Rendering the SideNav component */}
      </div>
      
      {/* Main content section; grows to fill remaining space, with padding and overflow control */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children} {/* Render any child components passed to Layout */}
      </div>
    </div>
  );
}
