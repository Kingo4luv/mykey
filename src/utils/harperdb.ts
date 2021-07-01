const HARPERDB_URL: string = (process.env.REACT_APP_HARPERDB_URL as string);

interface Record{
    firstName: string;
    lastName: string;
    email: string,
    company: string,
    phone: string,
    location: string,
    product: string,
    description: string,

}

interface OperationData{
    operation: string,
    schema: string,
    table: string,
    records: Record[],
}

const harperFetch = async (body: OperationData) => {
    const request = await fetch(HARPERDB_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${process.env.REACT_APP_HARPERDB_KEY}`,
        },
        body: JSON.stringify(body),
    });

    return request.json();
};

export default harperFetch