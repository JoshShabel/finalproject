'use client'
import'./globals.css'
import {useEffect, useEffectEvent, useState} from "react";
import MainCards from "../components/MainCards";
import Card from "../components/Card";
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export default function Home() {
    /*    const profiles = [
          {name: "John Doe", title: "Software Engineer", email: "john@example.com", img: image1},
          {name: "Jane Doe", title: "Construction Manager", email: "jane@example.com", img: image2},
          {name: "Joe Doe", title: "Wedding planner", email: "joe@example.com", img: image3}
      ]*/
    // Get all unique titles
    // TODO: figure out a way to avoid recalculating this constantly on rerenders
    /*    let titleArray = profiles.map(({title}) => (title));
        let titleSet = new Set(titleArray);
        titleArray = [...titleSet]*/

    const [textInput, setTextInput] = useState("");
    const [job, setJob] = useState('None Chosen');
    const [modeToggle, setModeToggle] = useState(true);
    const [formState, setFormState] = useState(0);
    const [loading, setLoading] = useState(true);

/*     const fetchData = useEffectEvent(async () => {

         if (loading === true) {
             setLoading(false);
         }
     });


    useEffect( () => {

        fetchData();
    }, [formState, loading]);*/

/*    function handleFormState() {
        setFormState(formState + 1);
    }*/

    /*    const handleChange = (event) => {
            setJob(event.target.value);
        };*/

/*    const appModeToggleFunction = () => {
        setModeToggle(prevModeToggle => !prevModeToggle);
    }*/

    return (
        <div>
            <div className="appBody">
                <h1>My React App</h1>
               {/* <Wrapper children={<Introduction/>}/>
                <ProfileForm handleFormState={handleFormState}></ProfileForm>*/}
                {/*<label>Choose Job:</label>
                <select value={job} onChange={handleChange}>
                    <option value="None Chosen">None Chosen</option>
                    {
                        titleArray.map((title, i) => (
                            <option key={i} value={title}>{title}</option>
                        ))
                    }
                </select>*/}
                <label>What is their name?</label>
                <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                />
                <button onClick={
                    () => {
                        setTextInput("");
                        setJob("None Chosen");
                    }
                }>Reset
                </button>
                <br/>

                <MainCards></MainCards>
                {/*
                <div className="darkCardDisplayArea">
                    {
                        profiles.map((profile) => (
                            <Card key={profile.email} name={profile.name} email={profile.email} password={profile.password} notes={profile.notes}/>
                        ))

                    }
                </div>*/}
                <footer></footer>
            </div>
        </div>
    )
}
