import { PanelList, RatioBar } from "../templates/Elements"

function Skills() {
    const webdev: [React.ReactElement, string][] = [
        [<>
            <h1>Front End</h1>
            <ul>
                <li>HTML</li>
                <RatioBar val={100} />
                <li>CSS</li>
                <RatioBar val={80} />
                <li>Javascript</li>
                <RatioBar val={100} />
                <li>Typescript</li>
                <RatioBar val={90} />
            </ul>
        </>, ''],
        [<>
            <h1>Back End</h1>
            <ul>
                <li>PHP</li>
                <RatioBar val={90} />
                <li>ASPX</li>
                <RatioBar val={70} />
            </ul>
        </>, ''],
        [<>
            <h1>Database</h1>
            <ul>
                <li>SQL</li>
                <RatioBar val={100} />
            </ul>
        </>, ''],
        [<>
            <h1>Library</h1>
            <ul>
                <li>React</li>
                <RatioBar val={90} />
            </ul>
        </>, '']
    ]
    const ml: [React.ReactElement, string][] = [
        [<>
            <h1>Data cleaning</h1>
            <ul>
                <li>Scaling</li>
                <li>One-hot encoding</li>
                <li>Parsing</li>
            </ul>
        </>, ''],
        [<>
            <h1>Basic Models</h1>
            <ul>
                <li>Linear Regression</li>
                <li>Decision Trees</li>
                <li>Random Forest</li>
            </ul>
        </>, ''],
        [<>
            <h1>Library Models</h1>
            <ul>
                <li>Ultralytics YOLO11</li>
                <li>Deepface</li>
            </ul>
        </>, '']
    ]
    const gamedev: [React.ReactElement, string][] = [
        [<>
            <h1>Programming</h1>
            <ul>
                <li>C#</li>
                <RatioBar val={80} />
                <li>HLSL</li>
                <RatioBar val={40} />
            </ul>
        </>, ''],
        [<>
            <h1>Concepts</h1>
            <ul>
                <li>Vectors</li>
                <RatioBar val={90} />
                <li>Quaternions</li>
                <RatioBar val={70} />
                <li>Object Inheritance</li>
                <RatioBar val={100} />
            </ul>
        </>, '']
    ]
    return (
        <>
            <section>
                <h1>Web Development</h1>
                <PanelList items={webdev} />
            </section>
            <section>
                <h1>Machine Learning</h1>
                <PanelList items={ml} />
            </section>
            <section>
                <h1>Game Development</h1>
                <PanelList items={gamedev} />
            </section>
        </>
    )
}
export default Skills