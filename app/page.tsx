import Hero from "./_components/Hero";
import Experience from "./_components/Experience";
// import Resources from "./_components/Resources";
export default function Home() {
  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
      <Hero />
      {/* <Resources /> */}
      <Experience />
    </div>
  );
}
