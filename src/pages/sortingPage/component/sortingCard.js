import React from "react";

export default function SortingCard() {
    return (
        <div>
            <img src="http://placekitten.com/200/300" alt="http://placekitten.com/200/300"
                style={{
                    width: '250px',
                    height: '350px',
                    borderRadius: '16px',
                    objectFit: 'cover',
                }}
            />
            <div style={{
                maxWidth: '250px',
                marginTop: '1em',
                marginBottom: '1em'
            }} >
                <h3>Judulnya heheheh ini biar lebih panjang gambarnya neko biar tambah semangat</h3>
            </div>
        </div>
    )
}