import { useReducer } from "react";

const ACTIONS = {
	ADD_OPERAND: "ADD_OPERAND",
	ADD_OPERATOR: "ADD_OPERATOR",
	EVALUATE: "EVALUATE",
	CLEAR: "CLEAR",
	DELETE: "DELETE",
};

const initialState = {
	prevInput: "",
	currentInput: "",
	operator: null,
	result: 0,
};

const reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.ADD_OPERAND:
			if (payload === "." && state.currentInput.includes(".")) return state;
			return { ...state, currentInput: state.currentInput + payload };

		case ACTIONS.ADD_OPERATOR:
			if (!state.currentInput) return state; // Ignore operator if no input

			if (state.operator) {
				return {
					...state,
					operator: payload,
				};
			}

			return {
				...state,
				operator: payload,
				prevInput: state.currentInput,
				currentInput: "",
			};

		case ACTIONS.EVALUATE:
			if (!state.prevInput || !state.operator || !state.currentInput)
				return state;

			const prevNum = parseFloat(state.prevInput);
			const currentNum = parseFloat(state.currentInput);
			let result = 0;

			switch (state.operator) {
				case "+":
					result = prevNum + currentNum;
					break;
				case "-":
					result = prevNum - currentNum;
					break;
				case "*":
					result = prevNum * currentNum;
					break;
				case "/":
					if (currentNum !== 0) {
						result = prevNum / currentNum;
					} else {
						console.error("Division by zero");
						return state;
					}
					break;
				default:
					break;
			}

			return {
				...state,
				result,
				prevInput: "",
				currentInput: result.toString(),
				operator: null,
			};

		case ACTIONS.CLEAR:
			return {
				...state,
				prevInput: "",
				currentInput: "",
				operator: null,
				result: 0,
			};

		case ACTIONS.DELETE:
			if (!state.currentInput) return state;
			return {
				...state,
				currentInput: state.currentInput.slice(0, -1),
			};

		default:
			return state;
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleButtonClick = (actionType, payload) => {
		dispatch({ type: actionType, payload });
	};

	return (
		<main className='h-screen w-screen bg-slate-900 text-white flex justify-center items-center'>
			{/* Calculator Section */}
			<section className='h-[550px] w-[400px] border border-slate-500 rounded flex flex-col justify-between'>
				{/* Display Section */}
				<div className='flex flex-col items-end mt-3 mx-3 border border-slate-400 rounded relative py-3 px-5 text-2xl bg-slate-800 h-28'>
					{/* Current Operator */}
					<div className='absolute left-3 top-[35%] font-bold'>
						{state.operator}
					</div>
					{/* First Line */}
					<div>{state.prevInput}</div>
					{/* Second Line */}
					<div>{state.currentInput}</div>
				</div>
				{/* Buttons Section */}
				<div className='m-3 mt-6 text-xl flex flex-col gap-3'>
					{/* First Row */}
					<div className='flex gap-3 justify-between'>
						<button
							className='w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.CLEAR)}
						>
							AC
						</button>
						<button
							className='w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.DELETE)}
						>
							Del
						</button>
						<button
							className='w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERATOR, "÷")}
						>
							÷
						</button>
						<button
							className='w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERATOR, "×")}
						>
							×
						</button>
					</div>
					<div className='flex gap-3 justify-between'>
						<button
							className='w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERAND, "7")}
						>
							7
						</button>
						<button
							className='w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERAND, "8")}
						>
							8
						</button>
						<button
							className='w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERAND, "9")}
						>
							9
						</button>
						<button
							className='w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERATOR, "-")}
						>
							-
						</button>
					</div>
					<div className='flex gap-3 justify-between'>
						<button
							className='w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERAND, "4")}
						>
							4
						</button>
						<button
							className='w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERAND, "5")}
						>
							5
						</button>
						<button
							className='w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERAND, "6")}
						>
							6
						</button>
						<button
							className='w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERATOR, "+")}
						>
							+
						</button>
					</div>
					<div className='grid grid-cols-4 grid-rows-2 gap-3'>
						<button
							className='col-span-1 w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERAND, "1")}
						>
							1
						</button>
						<button
							className='col-span-1 w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERAND, "2")}
						>
							2
						</button>
						<button
							className='col-span-1 w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERAND, "3")}
						>
							3
						</button>
						<button
							className='col-span-1 w-full row-span-2 bg-orange-500 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.EVALUATE)}
						>
							=
						</button>
						<button
							className='col-span-2 w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERAND, "0")}
						>
							0
						</button>
						<button
							className='col-span-1 w-full bg-slate-950 p-5 rounded'
							onClick={() => handleButtonClick(ACTIONS.ADD_OPERAND, ".")}
						>
							.
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
