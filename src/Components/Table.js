import React from "react";

const Table = ({ data }) => {
    console.log(data);
    console.log(data.content);

    if (!data || !data.content) {
        return null; 
    }

    const { content, backgroundColor } = data;

    if (!Array.isArray(content) || content.length === 0) {
        return null; 
    }

    const firstItem = content[0];
    const keys = Object.keys(firstItem);

    console.log(firstItem); // Check the first item
    console.log(keys); // Check keys

    return (
        <div className="direct-chat-text">
            <pre className='pretext' style={{ backgroundColor }}>
                <div>
                    <table className="table table-bordered mt-4" style={{ backgroundColor }}>
                        <thead>
                            <tr>
                                {keys.map((key, index) => (
                                    <th className="text-center" key={index}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {content.map((item, rowIndex) => (
                                <tr key={rowIndex}>
                                    {keys.map((key, colIndex) => (
                                        <td className="text-center" key={colIndex}>{item[key] !== null && item[key] !== undefined && item[key].length !== 0 ? item[key] : "-"}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </pre>
        </div>
    );
};

export default Table;

