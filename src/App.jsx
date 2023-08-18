function App() {
	return (
		<main className='h-screen w-screen bg-slate-900 text-white flex justify-center items-center'>
			{/* Calculator Section */}
			<section className='h-[550px] w-[400px] border border-slate-500 rounded flex flex-col justify-between'>
				{/* Display Section */}
				<div className='flex flex-col items-end mt-3 mx-3 border border-slate-400 rounded relative py-3 px-5 text-2xl bg-slate-800'>
					{/* Current Operator */}
					<div className='absolute left-3 top-6'>+</div>
					{/* First Line */}
					<div>30</div>
					{/* Second Line */}
					<div>50</div>
				</div>
				{/* Buttons Section */}
				<div className='m-3 mt-6 text-xl flex flex-col gap-3'>
					{/* First Row */}
					<div className='flex gap-3 justify-between'>
						<button className='w-full bg-slate-950 p-5 rounded'>AC</button>
						<button className='w-full bg-slate-950 p-5 rounded'>Del</button>
						<button className='w-full bg-slate-950 p-5 rounded'>÷</button>
						<button className='w-full bg-slate-950 p-5 rounded'>×</button>
					</div>
					<div className='flex gap-3 justify-between'>
						<button className='w-full bg-slate-950 p-5 rounded'>7</button>
						<button className='w-full bg-slate-950 p-5 rounded'>8</button>
						<button className='w-full bg-slate-950 p-5 rounded'>9</button>
						<button className='w-full bg-slate-950 p-5 rounded'>-</button>
					</div>
					<div className='flex gap-3 justify-between'>
						<button className='w-full bg-slate-950 p-5 rounded'>4</button>
						<button className='w-full bg-slate-950 p-5 rounded'>5</button>
						<button className='w-full bg-slate-950 p-5 rounded'>6</button>
						<button className='w-full bg-slate-950 p-5 rounded'>+</button>
					</div>
					<div className='grid grid-cols-4 grid-rows-2 gap-3'>
						<button className='col-span-1 w-full bg-slate-950 p-5 rounded'>
							1
						</button>
						<button className='col-span-1 w-full bg-slate-950 p-5 rounded'>
							2
						</button>
						<button className='col-span-1 w-full bg-slate-950 p-5 rounded'>
							3
						</button>
						<button className='col-span-1 w-full row-span-2 bg-orange-500 p-5 rounded'>
							=
						</button>
						<button className='col-span-2 w-full bg-slate-950 p-5 rounded'>
							0
						</button>
						<button className='col-span-1 w-full bg-slate-950 p-5 rounded'>
							.
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
