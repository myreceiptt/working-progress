"use client";
import Link from "next/link";
import Connected from "../../components/connect/accessbutton";
import { Card } from "../../components/card";
import { Eye } from "lucide-react";
import { useActiveAccount } from "thirdweb/react";

export default function ProfessorNOTA() {
  const account = useActiveAccount();

  return (
    <div className="px-6 pt-20 pb-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
      <div className="grid grid-cols-1 mx-auto">
        <Card>
          <article className="relative w-full h-full p-4 md:p-8">
            <div className="my-4 md:my-8 grid grid-cols-1">
              <Connected />
            </div>
            {account && (
              <>
                <div className="flex justify-between gap-2 items-center">
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    <time dateTime={new Date("2024-02-29").toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date("2024-02-29"))}
                    </time>
                  </span>
                  <span className="text-zinc-500 text-xs  flex items-center gap-1">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", {
                      notation: "compact",
                    }).format(11111111111)}
                  </span>
                </div>
                <h1 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                  Professor NOTA
                </h1>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <Link
                    href="https://docs.endhonesa.com/04-the-12th-stage.../professor-nota"
                    target="_blank"
                    className="underline duration-500 hover:text-zinc-300">
                    Prof. NOTA
                  </Link>{" "}
                  is a living IP, born from energy and archives and incubated by
                  the community at{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300">
                    0101 Universe
                  </Link>
                  , incarnated in{" "}
                  <Link
                    href="#"
                    className="underline duration-500 hover:text-zinc-300">
                    Universe of Reality
                  </Link>{" "}
                  in the form of HFP (Human for Profile)—a human avatar.{" "}
                  <Link
                    href="https://docs.endhonesa.com/04-the-12th-stage.../professor-nota"
                    target="_blank"
                    className="underline duration-500 hover:text-zinc-300">
                    Prof. NOTA
                  </Link>{" "}
                  is not just a name—he is a protocol of existence: narrative →
                  artifact → operation.
                </p>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  The opening line that is never revoked: "We don't belong in
                  your reality... stay alert and beware of scams."
                </p>
                <ul className="z-20 mt-4 ml-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 list-decimal">
                  <li className="mt-2">
                    HFP Persona & Canon
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Persona: "Prof. NOTA v.xx.xx" (version follows HFP &
                        role).
                      </li>
                      <li className="mt-2 ml-4">
                        HFP: A human avatar—a character controlled by Prof. NOTA
                        in Reality—signs, contracts, and assumes responsibility
                        as an Authorized Signatory.
                      </li>
                      <li className="mt-2 ml-4">
                        Official Verification: All verifications are conducted
                        solely through ecosystem domains (endhonesa.com,
                        skateshop.id, straight-line.org).
                      </li>
                      <li className="mt-2 ml-4">
                        Authorized Signatory List: The list follows The Resume
                        and is aligned with Governance.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Timeline (Concise & Canonical)
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        MyReceipt → NOTA → Professor NOTA → Prof. NOTA: archive
                        & artifact-based persona evolution.
                      </li>
                      <li className="mt-2 ml-4">
                        First Incarnation in Reality: the emergence of HFP v10
                        on the island of Bali, INDONESIA—a marker of the rift
                        between the two realms (0101 ↔ Reality).
                      </li>
                      <li className="mt-2 ml-4">
                        WAIVFVES #1–#2: the foundation of artifacts/canon reused
                        in stories & operations (The 12th Stage).
                      </li>
                      <li className="mt-2 ml-4">
                        Firewall Manager Playbook: establishing ethics, access
                        SOPs, and communication firewalls to protect time,
                        energy, and value.
                      </li>
                      <li className="mt-2 ml-4">
                        The Resume & The Roles: a single source of truth
                        (services, competencies, version formats, contract
                        models) + a list of living roles that
                        avatars/collaborators can fill.
                      </li>
                      <li className="mt-2 ml-4">
                        The 12th Stage: public operation through ENDHONESA.COM
                        (entity‑profile + commerce + learning/media + gamified
                        access) with SBT‑gating and The Currency ($OiOi).
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Public Role & Services
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Prof. NOTA operates as a catalyst: building a vision → a
                        testable system → a distributable product.
                      </li>
                      <li className="mt-2 ml-4">
                        The spectrum of value/services (strategy, IP/story, Web3
                        prototyping, business architecture, and legacy
                        operations for ENDHONESA & SKATESHOP.ID) is formulated
                        in the Firewall Manager Playbook.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Evidence, Tokens, & Access
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Access is documented through Soulbound Tokens (SBTs) and
                        artifacts; claims, progress, and permissions are mapped
                        to role layers (public ↔ Citizen ↔ HFP/partner).
                      </li>
                      <li className="mt-2 ml-4">
                        All references to identity, version, and signer follow
                        The Resume.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    Ethics & Guardrails
                    <ul className="list-disc">
                      <li className="mt-2 ml-4">
                        Transparency, anti-phishing, anti-exploit,
                        contract-first-then-access, and rollback/denylist
                        mechanisms run under Firewall Manager—so that only what
                        is true, fair, and valuable gets through.
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200 mb-12">
                  ==== 47 =======
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <Link
                    href="/profile#prodserv"
                    className="hover:underline duration-500 hover:text-zinc-300">
                    <p className="block text-zinc-200 hover:text-zinc-50 text-sm">
                      <span aria-hidden="true">&larr;</span> Back to Profile
                    </p>
                  </Link>
                </div>

                {/* Here will be a button to claim the receipt. */}
              </>
            )}
          </article>
        </Card>
      </div>
    </div>
  );
}
