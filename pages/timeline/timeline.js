async function LoadTimeline() {
    //load necessities
    const parser = new DOMParser();
    const timeline = document.getElementById("content")
    const timelineXML = await fetch("data/timeline.xml")
        .then((res) => res.text())
        .then((text) => parser.parseFromString(text, "text/xml"))
        .then((xml) => xml.querySelector("timeline"));

    const segments = timelineXML.querySelectorAll("segment");
    segments.forEach((segment, i) => {
        const segmentElement = document.createElement("div");
        const date = document.createElement("h1");

        segmentElement.className = "segmentElement";
        date.innerHTML = segment.querySelector("date").textContent;

        timeline.appendChild(segmentElement);
        segmentElement.appendChild(date);

        const projects = segment.querySelectorAll("project");
        projects.forEach((project, o) => {
            const projectElement = document.createElement("div");
            const infoElement = document.createElement("div");
            const mediaContainer = document.createElement("div");
            const title = document.createElement("h1");
            const desc = document.createElement("p");

            projectElement.className = "project";
            infoElement.className = "info";
            mediaContainer.className = "mediaContainer";
            title.className = "timelineTitle";
            desc.className = "timelineDesc";
    
            title.innerText = project.querySelector("title").textContent;
            desc.innerText = project.querySelector("desc").textContent;


            infoElement.appendChild(title);
            infoElement.appendChild(desc);

            switch (project.querySelector("mediaType").textContent) {
                case "img":
                    const img = document.createElement("img");
                    img.className = "media";
                    img.src = project.querySelector("mediaPath").textContent;
                    mediaContainer.appendChild(img);
                    break;
                default:
                    break;
            }

            if ((i + o) % 2 == 0) {
                projectElement.appendChild(infoElement);
                projectElement.appendChild(mediaContainer);
            } else {
                projectElement.appendChild(mediaContainer);
                projectElement.appendChild(infoElement);
            }
            segmentElement.appendChild(projectElement);
        });
    });
}

LoadTimeline();