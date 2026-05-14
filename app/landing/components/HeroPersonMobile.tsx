export default function HeroPersonMobile({ src }: { src?: string }) {
  return (
    <div className="relative mx-auto w-[359px] max-[359px]:w-[274px] min-[500px]:w-[375px]" style={{ marginTop: "-80px" }}>
      <img
        src="/hero-person.png"
        alt=""
        className="w-[343px] max-[359px]:w-[274px] ml-[16px] max-[359px]:ml-[13px]"
      />
      <img
        src="/hero-dashed-mobile.svg"
        alt=""
        className="absolute z-20 w-[204px] max-[359px]:w-[163px] top-[5px] max-[359px]:top-[4px] left-[100px] max-[359px]:left-[71px]"
      />
      <img
        src="/hero-mic-btn.svg"
        alt=""
        className="absolute z-20 w-[30px] max-[359px]:w-[24px] top-[5px] max-[359px]:top-[4px] left-[4px] max-[359px]:left-[3px]"
      />
    </div>
  );
}
