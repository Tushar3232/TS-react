interface GreetingProps{
    name: string,
    age: number
}

const Greeting = ({name,age}: GreetingProps) => {
    return (
        <div>
            <div>
                Hello i'm {name}
            </div>
            <div>
                I'm {age} years old
            </div>
        </div>
    );
};

export default Greeting;