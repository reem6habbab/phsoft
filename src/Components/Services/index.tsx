import Service from "@/Components/Services/Service";

export default function Services() {
  let elements = [
    {
      icon: "bi bi-briefcase",
      title: "Lorem Ipsum",
      description:
        " Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      icon: "bi bi-card-checklist",
      title: "Dolor Sitema",
      description:
        "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    },
    {
      icon: "bi bi-bar-chart",
      title: "Sed ut perspiciatis",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      icon: "bi bi-briefcase",
      title: "Lorem Ipsum",
      description:
        " Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      icon: "bi bi-card-checklist",
      title: "Dolor Sitema",
      description:
        "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    },
    {
      icon: "bi bi-bar-chart",
      title: "Sed ut perspiciatis",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
  ];

  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="row">
            {elements.map(function (e) {
              return (
                <Service smcol="6" lgcol="4" title={e.title} icon={e.icon} description={e.description}/>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
