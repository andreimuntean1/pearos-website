import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Loader from 'components/Loader'
import Text from 'components/Text'
import Wrapper from 'components/Wrapper'

function TermsOfService() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => setIsLoading(false), [])

  return isLoading ? <Loader /> : (
    <>
      <Head>
        <title>pearOS - Terms of service</title>
      </Head>

      <Wrapper>
        <div className='flex flex-col items-center pt-32 overflow-hidden'>
          <Text type='title'>Terms of service</Text>
          <Text type='paragraph' styles='mt-5 opacity-70'>Last updated March 09, 2021</Text>
          <div className='w-full p-10 sm:px-0 sm:pt-10 overflow-hidden'>
            <Text type='small-title' styles='opacity-80 mt-24'>Agreement to terms</Text>
            <Text type='paragraph' styles='mt-5 opacity-70'>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quotyou”) and Pear Project, doing business as pear (&quotpear&quot, &quotwe”, &quotus”, or &quotour”), concerning your access to and use of the https://pearos.xyz website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quotsite”). You agree that by accessing the site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE site AND YOU MUST DISCONTINUE USE IMMEDIATELY.</Text>
            <Text type='paragraph' styles='mt-3 opacity-70'>Supplemental terms and conditions or documents that may be posted on the site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the &quotLast updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the site after the date such revised Terms of Use are posted.</Text>
            <Text type='paragraph' styles='mt-3 opacity-70'>The information provided on the site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</Text>
            <Text type='paragraph' styles='mt-3 opacity-70'>The site is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this site. You may not use the site in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</Text>
            <Text type='paragraph' styles='mt-3 opacity-70'>The site is intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use prior to you using the site.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Intellectual property rights</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>Unless otherwise indicated, the site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the &quotContent”) and the trademarks, service marks, and logos contained therein (the &quotMarks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the site &quotAS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</Text>
            <Text type='paragraph' styles='mt-3 opacity-70'>Provided that you are eligible to use the site, you are granted a limited license to access and use the site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the site, the Content and the Marks.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>User representations</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>By using the site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use (2) you are not under the age of 13 (3) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the site (4) you will not access the site through automated or non-human means, whether through a bot, script, or otherwise (5) you will not use the site for any illegal or unauthorized purpose and (6) your use of the site will not violate any applicable law or regulation.</Text>
            <Text type='paragraph' styles='mt-3 opacity-70'>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the site (or any portion thereof).</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Prohibited activities</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>You may not access or use the site for any purpose other than that for which we make the site available. The site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</Text>
            <Text type='paragraph' styles='mt-3 opacity-70'>As a user of the site, you agree not to:</Text>
            <ul className='mt-3 opacity-70'>
              <ol>
                <Text type='paragraph'>1. Systematically retrieve data or other content from the site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>2. Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>3. Disparage, tarnish, or otherwise harm, in our opinion, us and/or the site.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>4. Use any information obtained from the site in order to harass, abuse, or harm another person.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>5. Make improper use of our support services or submit false reports of abuse or misconduct.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>6. Use the site in a manner inconsistent with any applicable laws or regulations.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>7. Engage in unauthorized framing of or linking to the site.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>8. Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>9. Delete the copyright or other proprietary rights notice from any Content.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>10. Sell or otherwise transfer your profile.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>11. Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (&quotgifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as &quotspyware” or &quotpassive collection mechanisms” or &quotpcms”).</Text>
              </ol>
              <ol>
                <Text type='paragraph'>12. Interfere with, disrupt, or create an undue burden on the site or the networks or services connected to the site.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>13. Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the site to you.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>14. Attempt to bypass any measures of the site designed to prevent or restrict access to the site, or any portion of the site.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>15. Copy or adapt the site&aposs software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>16. Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the site.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>17. Make any unauthorized use of the site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>18. Use the site as part of any effort to compete with us or otherwise use the site and/or the Content for any revenue-generating endeavor or commercial enterprise.</Text>
              </ol>
            </ul>
            <Text type='small-title' styles='opacity-80 mt-12'>User generated contributions</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>The site does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quotContributions&quot). Contributions may be viewable by other users of the site and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the site Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:</Text>
            <ul className='mt-3 opacity-70'>
              <ol>
                <Text type='paragraph'>1. The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>2. You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the site, and other users of the site to use your Contributions in any manner contemplated by the site and these Terms of Use.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>3. You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the site and these Terms of Use.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>4. Your Contributions are not false, inaccurate, or misleading.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>5. Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>6. Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</Text>
              </ol>
              <ol>
                <Text type='paragraph'>7. Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>8. Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>9. Your Contributions do not violate any applicable law, regulation, or rule.</Text>
              </ol>
              <ol>
              </ol>
              <ol>
                <Text type='paragraph'>11. Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>12. Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>13. Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</Text>
              </ol>
              <ol>
                <Text type='paragraph'>14. Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.</Text>
              </ol>
            </ul>
            <Text type='paragraph' styles='mt-3 opacity-70'>Any use of the site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the site.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Contribution license</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>You and the site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).</Text>
            <Text type='paragraph' styles='mt-3 opacity-70'>By submitting suggestions or other feedback regarding the site, you agree that we can use and share such feedback for any purpose without compensation to you.</Text>
            <Text type='paragraph' styles='mt-3 opacity-70'>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the site. You are solely responsible for your Contributions to the site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Submissions</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the site (&aposSubmissions&apos) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Third-party website and content</Text> 
            <Text type='small-title' styles='opacity-80 mt-12'>Advertisers</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>We allow advertisers to display their advertisements and other information in certain areas of the site, such as sidebar advertisements or banner advertisements. If you are an advertiser, you shall take full responsibility for any advertisements you place on the site and any services provided on the site or products sold through those advertisements. Further, as an advertiser, you warrant and represent that you possess all rights and authority to place advertisements on the site, including, but not limited to, intellectual property rights, publicity rights, and contractual rights. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>site management</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>We reserve the right, but not the obligation, to: (1) monitor the site for violations of these Terms of Use (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof (4) in our sole discretion and without limitation, notice, or liability, to remove from the site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems and (5) otherwise manage the site in a manner designed to protect our rights and property and to facilitate the proper functioning of the site.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Privacy policy</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>We care about data privacy and security. Please review our Privacy Policy: <Link href={"https://privacy.pearos.xyz"} passHref><a className='underline'>https://privacy.pearos.xyz</a></Link>. By using the site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the site is hosted in Germany. If you access the site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Germany, then through your continued use of the site, you are transferring your data to Germany, and you agree to have your data transferred to and processed in Germany. Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.S. Children&aposs Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the site as quickly as is reasonably practical.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Term and termination</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>These Terms of Use shall remain in full force and effect while you use the site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE site (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE site OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</Text>
            <Text type='paragraph' styles='mt-3 opacity-70'>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Modifications and interruptions</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>We reserve the right to change, modify, or remove the contents of the site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our site. We also reserve the right to modify or discontinue all or part of the site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the site.</Text>
            <Text type='paragraph' styles='mt-3 opacity-70'>We cannot guarantee the site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the site during any downtime or discontinuance of the site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the site or to supply any corrections, updates, or releases in connection therewith.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Governing law</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>These conditions are governed by and interpreted following the laws of Romania, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law of your country of residence. Pear Project and yourself both agree to submit to the non-exclusive jurisdiction of the courts of Valcea, which means that you may make a claim to defend your consumer protection rights in regards to these Conditions of Use in Romania, or in the EU country in which you reside.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Dispute resolution</Text> 
            <Text type='small-title' styles='opacity-80 mt-8'>Informal Negotiations</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Use (each a &quotDispute&quot and collectively, the &quotDisputes&quot) brought by either you or us (individually, a &quotParty&quot and collectively, the &quotParties&quot), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.</Text>
            <Text type='small-title' styles='opacity-80 mt-8'>Binding Arbitration</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>Any dispute arising from the relationships between the Parties to this contract shall be determined by one arbitrator who will be chosen in accordance with the Arbitration and Internal Rules of the European Court of Arbitration being part of the European Centre of Arbitration having its seat in Strasbourg, and which are in force at the time the application for arbitration is filed, and of which adoption of this clause constitutes acceptance. The seat of arbitration shall be Ramnicu Valcea, Romania. The language of the proceedings shall be English. Applicable rules of substantive law shall be the law of Romania.</Text>
            <Text type='small-title' styles='opacity-80 mt-8'>Restrictions</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</Text>
            <Text type='small-title' styles='opacity-80 mt-8'>Exceptions to Informal Negotiations and Arbitration</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Corrections</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>There may be information on the site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the site at any time, without prior notice.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Disclaimer</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>THE site IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE site AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE site AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE site&aposS CONTENT OR THE CONTENT OF ANY WEBsiteS LINKED TO THE site AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE site, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE site, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE site BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE site. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE site, ANY HYPERLINKED WEBsite, OR ANY WEBsite OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Limitations of liability</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE site, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Indemnification</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys fees and expenses, made by any third party due to or arising out of: (1) use of the site (2) breach of these Terms of Use (3) any breach of your representations and warranties set forth in these Terms of Use (4) your violation of the rights of a third party, including but not limited to intellectual property rights or (5) any overt harmful act toward any other user of the site with whom you connected via the site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>User data</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>We will maintain certain data that you transmit to the site for the purpose of managing the performance of the site, as well as data relating to your use of the site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Electronic communications, transactions and signatures</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>Visiting the site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE site. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>California users and residents</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Miscellaneous</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>These Terms of Use and any policies or operating rules posted by us on the site or in respect to the site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.</Text>
            <Text type='small-title' styles='opacity-80 mt-12'>Contact us</Text> 
            <Text type='paragraph' styles='mt-5 opacity-70'>In order to resolve a complaint regarding the site or to receive further information regarding use of the site, please contact us at:</Text>
            <ul className='mt-3 opacity-70'>
              <li>
                <Text>Pear Project</Text>
              </li>
              <li>
                <Text>Linia, nr. 303</Text>
              </li>
              <li>
                <Text>Vâlcea</Text>
              </li>
              <li>
                <Text>Budești, Vâlcea 247059</Text>
              </li>
              <li>
                <Text>Romania</Text>
              </li>
              <li>
                <Text>Phone: <Link  href='tel:+40765667698' passHref><a className='underline'>+40 765 667 698</a></Link></Text>
              </li>
              <li>
                <Text>Email: <Link href='mailto:alex@pearos.xyz' passHref><a className='underline'>alex@pearos.xyz</a></Link></Text>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default TermsOfService