import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
    const [judul, setJudul] = useState("");
    const [isi, setIsi] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getNoteById();
    }, []);

    const updateNote = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://34.55.194.201:5000/note/${id}`, { judul, isi });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const getNoteById = async () => {
        try {
            const response = await axios.get(`http://34.55.194.201:5000/note/${id}`);
            setJudul(response.data.judul);
            setIsi(response.data.isi);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mt-5">
            <div className="box p-5">
                <h1 className="title">Edit Catatan</h1>
                <form onSubmit={updateNote}>
                    <div className="field">
                        <label className="label">Judul Catatan</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={judul} 
                                placeholder='Masukkan judul catatan' 
                                onChange={(e) => setJudul(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Isi Catatan</label>
                        <div className="control">
                            <textarea 
                                className="textarea" 
                                value={isi} 
                                placeholder='Tulis isi catatan...' 
                                onChange={(e) => setIsi(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="buttons mt-4">
                        <button type='submit' className="button is-success">Update</button>
                        <button type='button' className="button is-danger" onClick={() => navigate("/")}>Batal</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditNote;
