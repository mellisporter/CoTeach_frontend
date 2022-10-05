import React from "react";
import { useEffect, useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import Index from "../pages/Index";
import ShowBody from "../pages/showBody";
import New from "../pages/New";
import Update from "../pages/Update";

const Body = (props) => {
    //set state for content and setContent function
    const [content, setContent] = useState(null);

    // **This is for local dev testing; switch to Heroku when done**
    const URL = "http://localhost:4000/content/";

    // This function is used to get the data from the database. It will wait until it is completed and the set the state of the content with the returned data
    const getContent = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setContent(data);
    }

    // User can create content
    const createContent = async (content) => {
        await fetch(URL, {
            method: "Post",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(content)
        })
        getContent();
    };

    const updateContent = async (lesson, id) => {
        // make put request to create content route
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(lesson)
        });
    }

    // users can delete content
    const deleteContent = async id => {
        // make delete request
        await fetch(URL + id, {
            method: "DELETE",
        })
        getContent();
    };

    

    //Initial render
    useEffect(() => {getContent();}, []);

    console.log("Index" , {content})

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index
                        content={content}
                    />
                </Route>
                <Route path="/content/new">
                    <New
                        createContent={createContent}
                    />
                </Route>
                <Route path="/content/:id/update">
                    <Update content={content} updateContent={updateContent}/>
                </Route>
                <Route
                    path="/content/:id"
                    render={(rp) => (
                        <ShowBody
                            content={content}
                            deleteContent={deleteContent}
                            {...rp}
                        />
                    )}
                />                
            </Switch>
        </main>
    );
}

export default Body;