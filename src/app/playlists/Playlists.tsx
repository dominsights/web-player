'use client'
import {usePlaylists} from "@/app/playlists/usePlaylists";
import {useState} from "react";

type FormData = {
    title: string;
    description: string;
}

export default function Playlists() {
    const {playlists, add} = usePlaylists();
    const [inputs, setInputs] = useState<FormData>({description: "", title: ""});

    const handleSubmit = (event: any) => {
        event.preventDefault();
        add({id: playlists.length + 1, title: inputs.title, description: inputs.description, tracks: []})
    }

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return (
        <div>
            <main>
                <button>Add playlist</button>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {playlists.map(p => (
                        <tr key={p.id}>
                            <td>{p.title}</td>
                            <td>{p.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Title
                        <input type='text' name='title' value={inputs.title} onChange={handleChange}/>
                    </label>
                    <label>Description
                        <input type='text' name='description' value={inputs.description} onChange={handleChange}/>
                    </label>
                    <button type='submit'>Add</button>
                </form>
            </section>
        </div>);
}