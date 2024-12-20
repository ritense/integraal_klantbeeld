import './App.css';
import {useMutation} from './lib/wundergraph';
import React, {useEffect} from "react";
import {HaalcentraalPersonenResponseData} from "../wundergraph/generated/models";

class PersonenResponseProps {
    data?: HaalcentraalPersonenResponseData | undefined
}

function Person(response: PersonenResponseProps) {
    return (
        <div>
            {response?.data?.haalcentraal_Personen?.personen?.map((person,i) => (
                <li key={i}>
                    <p><strong>BSN:</strong> {person?.burgerservicenummer} </p>
                    <p><strong>Naam:</strong> {person?.naam?.volledigeNaam} </p>
                    <p><strong>Geslacht:</strong> {person?.geslacht?.omschrijving} </p>
                    <br/>
                </li>
            ))}
        </div>
    )
}

function App() {
    const {data, error, trigger, isMutating} = useMutation({
        operationName: 'haalcentraal/personen'
    });

    useEffect(() => {
        trigger({
            type: "RaadpleegMetBurgerservicenummer",
            bsn: [
                "999993653",
                "999990755"
            ],
            fields: [
                "burgerservicenummer",
                "geslacht",
                "naam.volledigeNaam"
            ]
        })
    }, [trigger])

    return (
        <div className="App">
            <div style={{"display": "inline-block"}}>
                <a href="https://wundergraph.com" target="_blank" rel="noreferrer">
                    <img src="/wundergraph.svg" className="logo wundergraph" alt="WunderGraph logo"/>
                </a>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src="/react.svg" className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Panorama</h1>
            <div className="card">
                <div>
                    {isMutating && <p>Loading...</p>}
                    {error && <p>Error: {JSON.stringify(error, null, 4)}</p>}
                    {data && (
                        <><h2>Data vanuit de BRP:</h2><Person data={data}></Person></>
                    )}
                </div>
            </div>
            <p className="read-the-docs">Click on the WunderGraph, Vite and React logos to learn more</p>
        </div>
    );
}

export default App;