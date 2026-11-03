export interface Props {
    completed: boolean;
    task: string;
    id: number;
    onChange: (completed: boolean, id: number) => void;
}

function Task({ completed, task, onChange, id }: Props) {
    return (
        <div>
            {completed ? "WYKONANE: " : "NIE WYKONANE: "}
            <p>{task}</p>
            <button onClick={() => onChange(completed, id)}>
                Zmien
            </button>
        </div>
    );
}

export default Task;
