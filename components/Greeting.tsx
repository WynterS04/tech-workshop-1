type Props = {
    name: string;
}

const Greeting = ({ name }: Props) => {
    return (
        <p className="text-black">Hi, {name}!</p>
    )
}

export default Greeting;