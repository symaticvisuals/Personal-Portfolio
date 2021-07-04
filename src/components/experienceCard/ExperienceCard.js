import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-company dark-mode-text-company"
              : "experience-text-company"
          }
        >
          {cardInfo.company}
        </h5>

        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
      </div>
    </div>
  );
}
