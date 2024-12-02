
import pdf from "/public/resume/resume.pdf";

export default function Resume() {
  return (
    <section className="my-24 flex items-center justify-center">
      <div className="flex w-4/5 flex-col items-center justify-center">
        <iframe src={pdf} width="70%" height="1000px" />
      </div>
    </section>
  );
}
