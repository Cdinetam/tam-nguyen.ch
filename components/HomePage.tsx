import type { HomeCopy } from "../lib/home-copy";

const logoSrc = "/logo-tavyro.png";
const portraitSrc = "/tam-nguyen.jpg";

export default function HomePage({ copy }: { copy: HomeCopy }) {
  return (
    <section className="card">
      <div className="intro-head">
        <img className="portrait" src={portraitSrc} alt="Tam Nguyen" width={160} height={210} />
        <div>
          <h1>Tam Nguyen</h1>
          <h2>{copy.h2}</h2>
        </div>
      </div>

      {copy.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}

      <div className="tavyro-mention">
        <a
          className="tavyro-logo-link"
          href={copy.tavyroHomeUrl}
          target="_blank"
          rel="noreferrer"
        >
          <img className="tavyro-logo" src={logoSrc} alt="TaVyro" />
        </a>
        <div>
          <p>
            {copy.engagementBefore}
            <a href={copy.tavyroMentionUrl} target="_blank" rel="noreferrer">
              www.tavyro.ch
            </a>
            {copy.engagementAfter}
          </p>
          <p className="quiet-links">
            <a href={copy.tavyroServicesUrl} target="_blank" rel="noreferrer">
              {copy.tavyroServices}
            </a>
            <a href={copy.tavyroHomeUrl} target="_blank" rel="noreferrer">
              TaVyro
            </a>
            <a href="https://fractional-chro.ch" target="_blank" rel="noreferrer">
              fractional-chro.ch
            </a>
          </p>
        </div>
      </div>

      <div className="divider" />

      <h3>{copy.experience}</h3>

      <div className="role">
        <p className="role-meta">{copy.tavyroDates}</p>
        <p className="role-title">{copy.tavyroOrg}</p>
        <p className="role-role">{copy.tavyroRole}</p>
        <p>{copy.tavyroBody}</p>
      </div>

      <div className="role">
        <p className="role-meta">{copy.swizzDates}</p>
        <p className="role-title">{copy.swizzOrg}</p>
        <p className="role-role">{copy.swizzRole}</p>
        <p>{copy.swizzBody}</p>
      </div>

      <p className="role-title">{copy.chroTitle}</p>
      {copy.roles.map((role) => (
        <div className="role" key={role.dates + role.org}>
          <p className="role-meta">{role.dates}</p>
          <p className="role-title">{role.org}</p>
          <p className="role-role">{role.role}</p>
          <p>{role.body}</p>
        </div>
      ))}

      <p>{copy.earlier}</p>

      <div className="divider" />

      <h3>{copy.education}</h3>
      <div className="plain-lines">
        {copy.degrees.map((degree) => (
          <p key={degree}>{degree}</p>
        ))}
        <p>{copy.languages}</p>
      </div>
    </section>
  );
}
