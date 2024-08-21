const vocabulary = [
{
    id: 2,
    frontHTML: <div className="greek-side">ὁ ἡ τό</div>,
    backHTML: <div className="english-side">the</div>
},
{
    id: 3,
    frontHTML: <div className="greek-side">αὐτός αὐτή αὐτό</div>,
    backHTML: <div className="english-side">him- her- itself etc. (for emphasis); the same (with article); (pron.) him, her, it etc. (in oblique cases)</div>
},
{
    id: 4,
    frontHTML: <div className="greek-side">καί</div>,
    backHTML: <div className="english-side">and, also, even; καί...καί both...and</div>
},
{
    id: 5,
    frontHTML: <div className="greek-side">δέ</div>,
    backHTML: <div className="english-side">and; but</div>
},
{
    id: 6,
    frontHTML: <div className="greek-side">τίς τί</div>,
    backHTML: <div className="english-side">who? what? which? (interrog. pron./adj.)</div>
},
{
    id: 7,
    frontHTML: <div className="greek-side">εἰμί, ἔσομαι, impf. ἦν, infin. εἶναι</div>,
    backHTML: <div className="english-side">be, exist</div>
},
{
    id: 8,
    frontHTML: <div className="greek-side">οὗτος αὕτη τοῦτο</div>,
    backHTML: <div className="english-side">this, these; μετὰ ταῦτα after this</div>
},
{
    id: 9,
    frontHTML: <div className="greek-side">ἤ</div>,
    backHTML: <div className="english-side">or; than (after a comparative); ἤ...ἤ either...or</div>
},
{
    id: 10,
    frontHTML: <div className="greek-side">ἐν</div>,
    backHTML: <div className="english-side">in, among (+dat.)</div>
},
{
    id: 11,
    frontHTML: <div className="greek-side">μέν...δέ</div>,
    backHTML: <div className="english-side">on the one hand...on the other hand (often untranslated); μέν (by itself) indeed</div>
},
{
    id: 12,
    frontHTML: <div className="greek-side">τις τι</div>,
    backHTML: <div className="english-side">someone, something, anyone, anything, some, any (enclitic indef. pron./adj.)</div>
},
{
    id: 13,
    frontHTML: <div className="greek-side">ὅς ἥ ὅ</div>,
    backHTML: <div className="english-side">who, which, that</div>
},
{
    id: 14,
    frontHTML: <div className="greek-side">γάρ</div>,
    backHTML: <div className="english-side">for (explanatory), indeed, in fact (confirming)</div>
},
{
    id: 15,
    frontHTML: <div className="greek-side">οὐ, οὐκ, οὐχ</div>,
    backHTML: <div className="english-side">not (with indicative verbs)</div>
},
{
    id: 16,
    frontHTML: <div className="greek-side">λέγω, ἐρῶ, εἶπον, εἴρηκα, λέλεγμαι, ἐλέχθην and ἐρρήθην</div>,
    backHTML: <div className="english-side">say, speak (of), recount; pick up, collect, count</div>
},
{
    id: 17,
    frontHTML: <div className="greek-side">ὡς</div>,
    backHTML: <div className="english-side">as, since; (introducing purpose clause) so that (+subj./opt.); (introducing indir. statement) that</div>
},
{
    id: 18,
    frontHTML: <div className="greek-side">τε</div>,
    backHTML: <div className="english-side">and; τε…τε both…and</div>
},
{
    id: 19,
    frontHTML: <div className="greek-side">εἰς</div>,
    backHTML: <div className="english-side">into, to, towards (+acc.)</div>
},
{
    id: 20,
    frontHTML: <div className="greek-side">ἐπί</div>,
    backHTML: <div className="english-side">at (+gen.); on (+dat.); on to, against (+acc.)</div>
},
{
    id: 21,
    frontHTML: <div className="greek-side">κατά</div>,
    backHTML: <div className="english-side">down, down (from or along), throughout, according to; κατὰ γῆν by land; κατὰ φύσιν in accordance with nature; κατ’ ἔθνη by nations; καθ᾿ἕνα one by one.</div>
},
{
    id: 22,
    frontHTML: <div className="greek-side">ἐγώ ἐμοῦ, (pl.) ἡμεῖς, ἡμῶν</div>,
    backHTML: <div className="english-side">I, we</div>
},
{
    id: 23,
    frontHTML: <div className="greek-side">πρός</div>,
    backHTML: <div className="english-side">from the side of, in the presence of (+gen.); near, at, in addition to (+dat.); to, towards, in relation to (+acc.)</div>
},
{
    id: 24,
    frontHTML: <div className="greek-side">γίγνομαι, γενήσομαι, 2 aor. ἐγενόμην, γέγονα, γεγένημαι, ἐγενήθην</div>,
    backHTML: <div className="english-side">become; be born; happen, be</div>
},
{
    id: 25,
    frontHTML: <div className="greek-side">ἐάν (εἰ-ἄν)</div>,
    backHTML: <div className="english-side">if (+subj.)</div>
},
{
    id: 26,
    frontHTML: <div className="greek-side">διά</div>,
    backHTML: <div className="english-side">through, during, because of (+gen., acc.)</div>
},
{
    id: 27,
    frontHTML: <div className="greek-side">ἀλλά</div>,
    backHTML: <div className="english-side">but</div>
},
{
    id: 28,
    frontHTML: <div className="greek-side">πᾶς πᾶσα πᾶν</div>,
    backHTML: <div className="english-side">every, all; whole (with article)</div>
},
{
    id: 29,
    frontHTML: <div className="greek-side">ἔχω, ἕξω or σχήσω, 2 aor. ἔσχον, ἔσχηκα, impf. εἶχον</div>,
    backHTML: <div className="english-side">have, hold, keep</div>
},
{
    id: 30,
    frontHTML: <div className="greek-side">ἐκ, ἐξ</div>,
    backHTML: <div className="english-side">from, out of (+gen.)</div>
},
{
    id: 31,
    frontHTML: <div className="greek-side">πολύς πολλή πολύ</div>,
    backHTML: <div className="english-side">much, many; ὡς ἐπὶ τὸ πολύ for the most part</div>
},
{
    id: 32,
    frontHTML: <div className="greek-side">περί</div>,
    backHTML: <div className="english-side">around, about; concerning (+gen.)</div>
},
{
    id: 33,
    frontHTML: <div className="greek-side">μή</div>,
    backHTML: <div className="english-side">not (marks the negative as subjective or conditional); εἰ μή if not, except</div>
},
{
    id: 34,
    frontHTML: <div className="greek-side">ὅστις ἥτις ὅ τι</div>,
    backHTML: <div className="english-side">anyone who, anything which; (in indir. quest.) who, which, what</div>
},
{
    id: 35,
    frontHTML: <div className="greek-side">ἄν</div>,
    backHTML: <div className="english-side">[marks verbs as potential (with optative), or generalizing (with subjunctive)]</div>
},
{
    id: 36,
    frontHTML: <div className="greek-side">σύ, σοῦ, (pl.) ὑμεῖς, ὑμῶν</div>,
    backHTML: <div className="english-side">you</div>
},
{
    id: 37,
    frontHTML: <div className="greek-side">ἀνά</div>,
    backHTML: <div className="english-side">up, on; throughout</div>
},
{
    id: 38,
    frontHTML: <div className="greek-side">ὅτι</div>,
    backHTML: <div className="english-side">because, that; (with superl.) as...as possible</div>
},
{
    id: 39,
    frontHTML: <div className="greek-side">εἰ</div>,
    backHTML: <div className="english-side">if (+indic. or opt.); εἴπερ if indeed</div>
},
{
    id: 40,
    frontHTML: <div className="greek-side">ἄλλος ἄλλη ἄλλο</div>,
    backHTML: <div className="english-side">other, another</div>
},
{
    id: 41,
    frontHTML: <div className="greek-side">ἀπό</div>,
    backHTML: <div className="english-side">from (+gen.)</div>
},
{
    id: 42,
    frontHTML: <div className="greek-side">φημί, φήσω, impf. ἔφην</div>,
    backHTML: <div className="english-side">say, assert, declare; οὐ φημί deny, refuse, say that...not</div>
},
{
    id: 43,
    frontHTML: <div className="greek-side">ὑπό</div>,
    backHTML: <div className="english-side">under (+gen., dat.); by (+gen. of personal agent); down under (+acc.)</div>
},
{
    id: 44,
    frontHTML: <div className="greek-side">ποιέω, ποιήσω, ἐποίησα, πεποίηκα, πεποίημαι, ἐποιήθην</div>,
    backHTML: <div className="english-side">make, produce, cause, do; (mid.) consider, reckon</div>
},
{
    id: 45,
    frontHTML: <div className="greek-side">οὖν</div>,
    backHTML: <div className="english-side">therefore, accordingly; at any rate</div>
},
{
    id: 46,
    frontHTML: <div className="greek-side">λόγος λόγου, ὁ</div>,
    backHTML: <div className="english-side">word, speech, discourse; thought, reason, account</div>
},
{
    id: 47,
    frontHTML: <div className="greek-side">παρά</div>,
    backHTML: <div className="english-side">from (+gen.); beside (+dat.); to, to the side of, contrary to (+acc.)</div>
},
{
    id: 48,
    frontHTML: <div className="greek-side">οὕτως</div>,
    backHTML: <div className="english-side">in this way</div>
},
{
    id: 49,
    frontHTML: <div className="greek-side">πρότερος προτέρα πρότερον</div>,
    backHTML: <div className="english-side">before, earlier; τὸ πρότερον previously, before</div>
},
{
    id: 50,
    frontHTML: <div className="greek-side">πρότερος προτέρα πρότερον</div>,
    backHTML: <div className="english-side">before, earlier; τὸ πρότερον previously, before</div>
},
{
    id: 51,
    frontHTML: <div className="greek-side">θεός θεοῦ, ὁ/ἡ</div>,
    backHTML: <div className="english-side">god, goddess</div>
},
{
    id: 52,
    frontHTML: <div className="greek-side">μετά</div>,
    backHTML: <div className="english-side">with (+gen.); after (+acc.)</div>
},
{
    id: 53,
    frontHTML: <div className="greek-side">ἑαυτοῦ ἑαυτῆς ἑαυτοῦ</div>,
    backHTML: <div className="english-side">him- her- itself (reflexive pron.)</div>
},
{
    id: 54,
    frontHTML: <div className="greek-side">μέγας μεγάλη μέγα</div>,
    backHTML: <div className="english-side">big, great, powerful</div>
},
{
    id: 55,
    frontHTML: <div className="greek-side">οὐδέ</div>,
    backHTML: <div className="english-side">and not, but not, nor; οὐδέ...οὐδέ not even...nor yet</div>
},
{
    id: 56,
    frontHTML: <div className="greek-side">ἐκεῖνος ἐκείνη ἐκεῖνο</div>,
    backHTML: <div className="english-side">that person or thing; ἐκεῖνος…οὗτος the former…the latter</div>
},
{
    id: 57,
    frontHTML: <div className="greek-side">τοιοῦτος τοιαύτη τοιοῦτο</div>,
    backHTML: <div className="english-side">such, of such a sort</div>
},
{
    id: 58,
    frontHTML: <div className="greek-side">οὐδείς οὐδεμία οὐδέν</div>,
    backHTML: <div className="english-side">no one, nothing</div>
},
{
    id: 59,
    frontHTML: <div className="greek-side">εἶπον</div>,
    backHTML: <div className="english-side">I said, I spoke, 2 aor. → λέγω, φημί</div>
},
{
    id: 60,
    frontHTML: <div className="greek-side">ἀγαθός –ή –όν</div>,
    backHTML: <div className="english-side">good, virtuous, brave, noble</div>
},
{
    id: 61,
    frontHTML: <div className="greek-side">γε</div>,
    backHTML: <div className="english-side">(enclitic) indeed; at least, at any rate</div>
},
{
    id: 62,
    frontHTML: <div className="greek-side">δή</div>,
    backHTML: <div className="english-side">surely, really, now, in fact, indeed (gives greater exactness)</div>
},
{
    id: 63,
    frontHTML: <div className="greek-side">πόλις πόλεως, ἡ</div>,
    backHTML: <div className="english-side">city, city-state</div>
},
{
    id: 64,
    frontHTML: <div className="greek-side">εἷς μία ἕν</div>,
    backHTML: <div className="english-side">one</div>
},
{
    id: 65,
    frontHTML: <div className="greek-side">ἵημι, ἥσω, ἧκα, -εἷκα, εἷμαι, -εἵθην</div>,
    backHTML: <div className="english-side">put in motion, let go, shoot; (mid.) hasten, rush</div>
},
{
    id: 66,
    frontHTML: <div className="greek-side">δέω, δεήσω, ἐδέησα, δεδέηκα, δεδέημαι, ἐδεήθην</div>,
    backHTML: <div className="english-side">lack, miss, stand in need of (+gen.)</div>
},
{
    id: 67,
    frontHTML: <div className="greek-side">ἄνθρωπος –ου, ὁ/ἡ</div>,
    backHTML: <div className="english-side">human being</div>
},
{
    id: 68,
    frontHTML: <div className="greek-side">ὁράω, ὄψομαι, 2 aor. εἶδον, ἑόρακα and ἑώρακα, ὤφθην, impf. ἑώρων</div>,
    backHTML: <div className="english-side">see, look (to)</div>
},
{
    id: 69,
    frontHTML: <div className="greek-side">μόνος μόνη μόνον</div>,
    backHTML: <div className="english-side">alone, single</div>
},
{
    id: 70,
    frontHTML: <div className="greek-side">οὔτε...οὔτε</div>,
    backHTML: <div className="english-side">neither...nor</div>
},
{
    id: 71,
    frontHTML: <div className="greek-side">οἷος οἵα οἷον</div>,
    backHTML: <div className="english-side">such as, of what sort, like, (exclam.) what a!, how! ; οἷός τε (+infin.) fit or able to; οἷόν τε (+infin.) it is possible to</div>
},
{
    id: 72,
    frontHTML: <div className="greek-side">λαμβάνω, λήψομαι, ἔλαβον, εἴληφα, εἴλημμαι, ἐλήφθην</div>,
    backHTML: <div className="english-side">take, grasp, seize; receive, get</div>
},
{
    id: 73,
    frontHTML: <div className="greek-side">δοκέω, δόξω, ἔδοξα</div>,
    backHTML: <div className="english-side">think, suppose, imagine (+acc. and infin.); seem, seem good; (impers.) δοκεῖ μοι it seems to me</div>
},
{
    id: 74,
    frontHTML: <div className="greek-side">ἕτερος ἑτέρα ἕτερον</div>,
    backHTML: <div className="english-side">the other (of two); other, another</div>
},
{
    id: 75,
    frontHTML: <div className="greek-side">κακός –ή –όν</div>,
    backHTML: <div className="english-side">bad, wicked, cowardly</div>
},
{
    id: 76,
    frontHTML: <div className="greek-side">ἀνήρ ἀνδρός, ὁ</div>,
    backHTML: <div className="english-side">man, husband</div>
},
{
    id: 77,
    frontHTML: <div className="greek-side">ἐπεί</div>,
    backHTML: <div className="english-side">after, since, when</div>
},
{
    id: 78,
    frontHTML: <div className="greek-side">ὅσος ὅση ὅσον</div>,
    backHTML: <div className="english-side">however much; as great as; (in pl.) as many as; ὅσον (adv.) as much as</div>
},
{
    id: 79,
    frontHTML: <div className="greek-side">καλέω, καλῶ, ἐκάλεσα, κέκληκα, κέκλημαι, ἐκλήθην</div>,
    backHTML: <div className="english-side">call, summon</div>
},
{
    id: 80,
    frontHTML: <div className="greek-side">σῶμα σώματος, τό</div>,
    backHTML: <div className="english-side">body</div>
},
{
    id: 81,
    frontHTML: <div className="greek-side">δεῖ, δεήσει, impf. ἔδει</div>,
    backHTML: <div className="english-side">it is necessary, one must, one ought (+acc. and infin.)</div>
},
{
    id: 82,
    frontHTML: <div className="greek-side">ὥσπερ</div>,
    backHTML: <div className="english-side">just as, as if</div>
},
{
    id: 83,
    frontHTML: <div className="greek-side">δίδωμι, δώσω, ἔδωκα, δέδωκα, δέδομαι, ἐδόθην</div>,
    backHTML: <div className="english-side">give, grant, offer</div>
},
{
    id: 84,
    frontHTML: <div className="greek-side">δίδωμι, δώσω, ἔδωκα, δέδωκα, δέδομαι, ἐδόθην</div>,
    backHTML: <div className="english-side">give, grant, offer</div>
},
{
    id: 85,
    frontHTML: <div className="greek-side">ἔτι</div>,
    backHTML: <div className="english-side">still, yet</div>
},
{
    id: 86,
    frontHTML: <div className="greek-side">φύσις φύσεως, ἡ</div>,
    backHTML: <div className="english-side">nature; (of the mind) one’s nature or disposition; regular order of nature</div>
},
{
    id: 87,
    frontHTML: <div className="greek-side">μικρός –ά –όν</div>,
    backHTML: <div className="english-side">small, little, short</div>
},
{
    id: 88,
    frontHTML: <div className="greek-side">δύναμαι, δυνήσομαι, ἐδυνήθην, δεδύνημαι</div>,
    backHTML: <div className="english-side">(+infin.) to be able (to), be strong enough (to)</div>
},
{
    id: 89,
    frontHTML: <div className="greek-side">ὥστε</div>,
    backHTML: <div className="english-side">(introducing natural or actual result clause) so as, so that, (with the result) that</div>
},
{
    id: 90,
    frontHTML: <div className="greek-side">ἀρχή ἀρχῆς, ἡ</div>,
    backHTML: <div className="english-side">beginning, origin; rule, empire, realm; magistracy</div>
},
{
    id: 91,
    frontHTML: <div className="greek-side">ἕκαστος ἑκάστη ἕκαστον</div>,
    backHTML: <div className="english-side">each (of several)</div>
},
{
    id: 92,
    frontHTML: <div className="greek-side">ἡμέρα ἡμέρας, ἡ</div>,
    backHTML: <div className="english-side">day</div>
},
{
    id: 93,
    frontHTML: <div className="greek-side">φύω, φύσω, ἔφυσα</div>,
    backHTML: <div className="english-side">bring forth, produce, beget; 2 aor. ἔφυν grew, pf. πέφυκα be by nature</div>
},
{
    id: 94,
    frontHTML: <div className="greek-side">ἅπας ἅπασα ἅπαν</div>,
    backHTML: <div className="english-side">all together</div>
},
{
    id: 95,
    frontHTML: <div className="greek-side">ὅμοιος ὁμοία ὅμοιον</div>,
    backHTML: <div className="english-side">like, resembling (+dat.)</div>
},
{
    id: 96,
    frontHTML: <div className="greek-side">νῦν, νυνί</div>,
    backHTML: <div className="english-side">now</div>
},
{
    id: 97,
    frontHTML: <div className="greek-side">γῆ γῆς, ἡ</div>,
    backHTML: <div className="english-side">earth</div>
},
{
    id: 98,
    frontHTML: <div className="greek-side">δύναμις δυνάμεως, ἡ</div>,
    backHTML: <div className="english-side">power, strength, ability</div>
},
{
    id: 99,
    frontHTML: <div className="greek-side">καλός –ή –όν</div>,
    backHTML: <div className="english-side">beautiful, noble, honorable</div>
},
{
    id: 100,
    frontHTML: <div className="greek-side">κύριος κυρίου, ὁ</div>,
    backHTML: <div className="english-side">lord, master</div>
},
{
    id: 101,
    frontHTML: <div className="greek-side">μᾶλλον</div>,
    backHTML: <div className="english-side">more, rather; μᾶλλον...ἤ rather than</div>
},
{
    id: 102,
    frontHTML: <div className="greek-side">ὅδε ἥδε τόδε</div>,
    backHTML: <div className="english-side">this</div>
},
{
    id: 103,
    frontHTML: <div className="greek-side">ὅλος ὅλη ὅλον</div>,
    backHTML: <div className="english-side">whole, entire, complete</div>
},
{
    id: 104,
    frontHTML: <div className="greek-side">μέρος μέρους, τό</div>,
    backHTML: <div className="english-side">part, share</div>
},
{
    id: 105,
    frontHTML: <div className="greek-side">ἄρα</div>,
    backHTML: <div className="english-side">therefore, then (drawing an inference)</div>
},
{
    id: 106,
    frontHTML: <div className="greek-side">ἐμός ἐμή ἐμόν</div>,
    backHTML: <div className="english-side">my, mine</div>
},
{
    id: 107,
    frontHTML: <div className="greek-side">χράομαι, χρήσομαι, ἐχρησάμην, κέχρημαι, ἐχρήσθην</div>,
    backHTML: <div className="english-side">use, experience, suffer (+dat.); treat someone in a certain way (+dat. and adv.)</div>
},
{
    id: 108,
    frontHTML: <div className="greek-side">δύο</div>,
    backHTML: <div className="english-side">two</div>
},
{
    id: 109,
    frontHTML: <div className="greek-side">χρόνος χρόνου, ὁ</div>,
    backHTML: <div className="english-side">time</div>
},
{
    id: 110,
    frontHTML: <div className="greek-side">ἴσος ἴση ἴσον</div>,
    backHTML: <div className="english-side">equal, the same as (+dat.)</div>
},
{
    id: 111,
    frontHTML: <div className="greek-side">ὅταν (ὅτε-ἄν)</div>,
    backHTML: <div className="english-side">whenever (+subj.)</div>
},
{
    id: 112,
    frontHTML: <div className="greek-side">μόνον</div>,
    backHTML: <div className="english-side">only</div>
},
{
    id: 113,
    frontHTML: <div className="greek-side">οἶδα, infin. εἰδέναι, imper. ἴσθι, plupf. used as impf. ᾔδειν</div>,
    backHTML: <div className="english-side">to know (pf. in pres. sense); to know how to (+infin.)</div>
},
{
    id: 114,
    frontHTML: <div className="greek-side">βασιλεύς βασιλέως, ὁ</div>,
    backHTML: <div className="english-side">king</div>
},
{
    id: 115,
    frontHTML: <div className="greek-side">ὦ</div>,
    backHTML: <div className="english-side">oh! (unemphatic when with the vocative)</div>
},
{
    id: 116,
    frontHTML: <div className="greek-side">βούλομαι, βουλήσομαι, βεβούλημαι, ἐβουλήθην</div>,
    backHTML: <div className="english-side">(+infin.) will, wish (to); be willing (to); ὁ βουλόμενος anyone who likes</div>
},
{
    id: 117,
    frontHTML: <div className="greek-side">φαίνω, φανῶ, ἔφηνα, πέφηνα, πέφασμαι, ἐφάνην</div>,
    backHTML: <div className="english-side">bring to light, make appear, make clear; (pass.) come to light, be seen, appear, appear to be (+ptc. or infin.)</div>
},
{
    id: 118,
    frontHTML: <div className="greek-side">γράφω, γράψω, ἔγραψα, γέγραφα, γέγραμμαι, ἐγράφην</div>,
    backHTML: <div className="english-side">write</div>
},
{
    id: 119,
    frontHTML: <div className="greek-side">φέρω, οἴσω, 1 aor. ἤνεγκα, 2 aor. ἤνεγκον, ἐνήνοχα, ἐνήνεγμαι, ἠνέχθην</div>,
    backHTML: <div className="english-side">carry, bring, fetch; carry off or away; φέρε come now, well</div>
},
{
    id: 120,
    frontHTML: <div className="greek-side">ψυχή ψυχῆς, ἡ</div>,
    backHTML: <div className="english-side">breath, life, soul</div>
},
{
    id: 121,
    frontHTML: <div className="greek-side">μηδείς μηδεμία μηδέν</div>,
    backHTML: <div className="english-side">no one, nothing</div>
},
{
    id: 122,
    frontHTML: <div className="greek-side">αἴτιος αἰτία αἴτιον</div>,
    backHTML: <div className="english-side">responsible, guilty</div>
},
{
    id: 123,
    frontHTML: <div className="greek-side">πάλιν</div>,
    backHTML: <div className="english-side">back, backwards; again</div>
},
{
    id: 124,
    frontHTML: <div className="greek-side">μάλιστα</div>,
    backHTML: <div className="english-side">most, most of all; (in replies) certainly</div>
},
{
    id: 125,
    frontHTML: <div className="greek-side">ὑπάρχω, ὑπάρξω, ὑπῆρξα, ὑπῆργμαι, ὑπήρχθην</div>,
    backHTML: <div className="english-side">exist, be, belong to; τὰ ὑπάρχοντα existing circumstances</div>
},
{
    id: 126,
    frontHTML: <div className="greek-side">ἄρχω, ἄρξω, ἦρξα, ἦργμαι, ἤρχθην</div>,
    backHTML: <div className="english-side">begin (+gen.); lead, rule, govern (+gen.)</div>
},
{
    id: 127,
    frontHTML: <div className="greek-side">γυνή γυναικός, ἡ</div>,
    backHTML: <div className="english-side">woman, wife</div>
},
{
    id: 128,
    frontHTML: <div className="greek-side">ποτε (enclitic)</div>,
    backHTML: <div className="english-side">at some time, ever, in the world</div>
},
{
    id: 129,
    frontHTML: <div className="greek-side">ἵνα</div>,
    backHTML: <div className="english-side">in order that (conj. +subj. or opt.); where (rel. adv. +indic.)</div>
},
{
    id: 130,
    frontHTML: <div className="greek-side">ὄνομα ὀνόματος, τό</div>,
    backHTML: <div className="english-side">name; fame</div>
},
{
    id: 131,
    frontHTML: <div className="greek-side">ὑπέρ</div>,
    backHTML: <div className="english-side">for (+gen), beyond (+acc.)</div>
},
{
    id: 132,
    frontHTML: <div className="greek-side">ἤδη</div>,
    backHTML: <div className="english-side">already, now (of the immediate past); presently (of the immediate future)</div>
},
{
    id: 133,
    frontHTML: <div className="greek-side">πατήρ πατρός, ὁ</div>,
    backHTML: <div className="english-side">father</div>
},
{
    id: 134,
    frontHTML: <div className="greek-side">ἀκούω, ἀκούσομαι, ἤκουσα, ἀκήκοα, plup. ἠκηκόη or ἀκηκόη, ἠκούσθην</div>,
    backHTML: <div className="english-side">listen (to), hear (of)</div>
},
{
    id: 135,
    frontHTML: <div className="greek-side">γένος γένους, τό</div>,
    backHTML: <div className="english-side">race, family; kind, class</div>
},
{
    id: 136,
    frontHTML: <div className="greek-side">τόπος τόπου, ὁ</div>,
    backHTML: <div className="english-side">place; topic</div>
},
{
    id: 137,
    frontHTML: <div className="greek-side">πράσσω, πράξω, ἔπραξα, πέπραχα, πέπραγμαι, ἐπράχθην</div>,
    backHTML: <div className="english-side">do, achieve, accomplish; do or fare in a certain way (+adv.)</div>
},
{
    id: 138,
    frontHTML: <div className="greek-side">πράσσω, πράξω, ἔπραξα, πέπραχα, πέπραγμαι, ἐπράχθην</div>,
    backHTML: <div className="english-side">do, achieve, accomplish; do or fare in a certain way (+adv.)</div>
},
{
    id: 139,
    frontHTML: <div className="greek-side">πρῶτος πρώτη πρῶτον</div>,
    backHTML: <div className="english-side">first, foremost, earliest; (adv.) τὸ πρῶτον in the first place</div>
},
{
    id: 140,
    frontHTML: <div className="greek-side">εὑρίσκω, εὑρήσω, 2 aor. ηὗρον or εὗρον, ηὕρηκα or εὕρηκα, εὕρημαι, εὑρέθην</div>,
    backHTML: <div className="english-side">find (out), discover, devise</div>
},
{
    id: 141,
    frontHTML: <div className="greek-side">παῖς παιδός, ὁ/ἡ</div>,
    backHTML: <div className="english-side">son, daughter, child; slave</div>
},
{
    id: 142,
    frontHTML: <div className="greek-side">ἔρχομαι, fut. εἶμι or ἐλεύσομαι, 2 aor. ἦλθον, ἐλήλυθα</div>,
    backHTML: <div className="english-side">come, go</div>
},
{
    id: 143,
    frontHTML: <div className="greek-side">υἱός υἱοῦ, ὁ</div>,
    backHTML: <div className="english-side">son</div>
},
{
    id: 144,
    frontHTML: <div className="greek-side">ὕδωρ ὕδατος, τό</div>,
    backHTML: <div className="english-side">water</div>
},
{
    id: 145,
    frontHTML: <div className="greek-side">ἴδιος ἰδία ἴδιον</div>,
    backHTML: <div className="english-side">one’s own; peculiar, separate, distinct</div>
},
{
    id: 146,
    frontHTML: <div className="greek-side">σός σή σόν</div>,
    backHTML: <div className="english-side">your, yours (sg.; ὑμέτερος = pl.)</div>
},
{
    id: 147,
    frontHTML: <div className="greek-side">γιγνώσκω, γνώσομαι, ἔγνων, ἔγνωκα, ἔγνωσμαι, ἐγνώσθην</div>,
    backHTML: <div className="english-side">come to know, learn; judge, think, or determine that (+acc. and infin.)</div>
},
{
    id: 148,
    frontHTML: <div className="greek-side">τυγχάνω, τεύξομαι, ἔτυχον, τετύχηκα, τέτυγμαι, ἐτύχθην</div>,
    backHTML: <div className="english-side">hit, light upon, meet by chance (+gen.); reach, gain, obtain; happen to be (+ptc.)</div>
},
{
    id: 149,
    frontHTML: <div className="greek-side">ἵστημι στήσω will set, ἔστησα set, caused to stand, 2 aor. ἔστην stood, ἕστηκα stand, plup. εἱστήκη stood, ἐστάθην stood</div>,
    backHTML: <div className="english-side">make to stand, set</div>
},
{
    id: 150,
    frontHTML: <div className="greek-side">ἅμα</div>,
    backHTML: <div className="english-side">at the same time; (prep.) together with (+dat.)</div>
},
{
    id: 151,
    frontHTML: <div className="greek-side">ἄγω, ἄξω, ἤγαγον, ἦχα, ἦγμαι, ἤχθην</div>,
    backHTML: <div className="english-side">lead, carry, bring; pass (time)</div>
},
{
    id: 152,
    frontHTML: <div className="greek-side">τρόπος τρόπου, ὁ</div>,
    backHTML: <div className="english-side">way, manner, fashion; way of life, habit, custom</div>
},
{
    id: 153,
    frontHTML: <div className="greek-side">μήτε...μήτε</div>,
    backHTML: <div className="english-side">neither...nor</div>
},
{
    id: 154,
    frontHTML: <div className="greek-side">μέσος μέση μέσον</div>,
    backHTML: <div className="english-side">middle, in the middle, moderate; τὸ μέσον midst</div>
},
{
    id: 155,
    frontHTML: <div className="greek-side">ἀλλήλων –οις</div>,
    backHTML: <div className="english-side">(oblique cases plural only) one another, each other</div>
},
{
    id: 156,
    frontHTML: <div className="greek-side">ἀεί</div>,
    backHTML: <div className="english-side">always</div>
},
{
    id: 157,
    frontHTML: <div className="greek-side">φίλος φίλη φίλον</div>,
    backHTML: <div className="english-side">beloved, dear; friendly</div>
},
{
    id: 158,
    frontHTML: <div className="greek-side">συμβαίνω, συμβήσομαι, 2 aor. συνέβην, συμβέβηκα</div>,
    backHTML: <div className="english-side">meet, come to an agreement, correspond; happen, occur, come to pass; turn out in a certain way (+adv.), result</div>
},
{
    id: 159,
    frontHTML: <div className="greek-side">ἔργον ἔργου, τό</div>,
    backHTML: <div className="english-side">work, achievement, exploit</div>
},
{
    id: 160,
    frontHTML: <div className="greek-side">πλέω, πλεύσομαι, ἔπλευσα, πέπλευκα, πέπλευσμαι, ἐπλεύσθην</div>,
    backHTML: <div className="english-side">sail</div>
},
{
    id: 161,
    frontHTML: <div className="greek-side">τότε</div>,
    backHTML: <div className="english-side">then, at that time; οἱ τότε the men of that time (opp. οἱ νῦν)</div>
},
{
    id: 162,
    frontHTML: <div className="greek-side">μήν</div>,
    backHTML: <div className="english-side">[emphasizes preceding particle]</div>
},
{
    id: 163,
    frontHTML: <div className="greek-side">χρή, impf. χρῆν or ἐχρῆν, infin. χρῆναι</div>,
    backHTML: <div className="english-side">it is necessary, it is fated, one ought (+infin. or +acc. and infin.)</div>
},
{
    id: 164,
    frontHTML: <div className="greek-side">δείκνυμι, δείξω, ἔδειξα, δέδειχα, δέδειγμαι, ἐδείχθην</div>,
    backHTML: <div className="english-side">show, point out</div>
},
{
    id: 165,
    frontHTML: <div className="greek-side">ζῷον ζῴου, τό</div>,
    backHTML: <div className="english-side">living being, animal</div>
},
{
    id: 166,
    frontHTML: <div className="greek-side">πρᾶγμα πράγματος, τό</div>,
    backHTML: <div className="english-side">thing; (pl.) circumstances, affairs, business</div>
},
{
    id: 167,
    frontHTML: <div className="greek-side">ἐναντίος ἐναντία ἐναντίον</div>,
    backHTML: <div className="english-side">opposite, facing; opposing</div>
},
{
    id: 168,
    frontHTML: <div className="greek-side">τίθημι, θήσω, ἔθηκα, τέθηκα, τέθειμαι (but usu. κεῖμαι instead), ἐτέθην</div>,
    backHTML: <div className="english-side">to put, place; establish, ordain, institute; put in a certain state</div>
},
{
    id: 169,
    frontHTML: <div className="greek-side">εἶδον, 2 aor. of ὁράω, act. infin. ἰδεῖν, mid.infin. ἰδέσθαι</div>,
    backHTML: <div className="english-side">I saw</div>
},
{
    id: 170,
    frontHTML: <div className="greek-side">χείρ χειρός, ἡ</div>,
    backHTML: <div className="english-side">hand</div>
},
{
    id: 171,
    frontHTML: <div className="greek-side">μηδέ</div>,
    backHTML: <div className="english-side">and not</div>
},
{
    id: 172,
    frontHTML: <div className="greek-side">ὀλίγος ὀλίγη ὀλίγον</div>,
    backHTML: <div className="english-side">little, small, few</div>
},
{
    id: 173,
    frontHTML: <div className="greek-side">νόμος νόμου, ὁ</div>,
    backHTML: <div className="english-side">custom, tradition, law</div>
},
{
    id: 174,
    frontHTML: <div className="greek-side">κοινός –ή –όν</div>,
    backHTML: <div className="english-side">common, shared, mutual</div>
},
{
    id: 175,
    frontHTML: <div className="greek-side">οἴομαι or οἶμαι, οἰήσομαι, impf. ᾤμην, aor. ᾠήθην</div>,
    backHTML: <div className="english-side">think, suppose, imagine (+acc. and infin.)</div>
},
{
    id: 176,
    frontHTML: <div className="greek-side">κινέω, κινήσω, ἐκίνησα, κεκίνηκα, κεκίνημαι, ἐκινήθην</div>,
    backHTML: <div className="english-side">set in motion, move, rouse</div>
},
{
    id: 177,
    frontHTML: <div className="greek-side">πάσχω, πείσομαι, ἔπαθον, πέπονθα</div>,
    backHTML: <div className="english-side">suffer, experience, be affected in a certain way (+adv.)</div>
},
{
    id: 178,
    frontHTML: <div className="greek-side">πῶς</div>,
    backHTML: <div className="english-side">how?</div>
},
{
    id: 179,
    frontHTML: <div className="greek-side">ὅσπερ ἥπερ ὅπερ</div>,
    backHTML: <div className="english-side">the very one who, the very thing which</div>
},
{
    id: 180,
    frontHTML: <div className="greek-side">τοσοῦτος –αύτη –οῦτο(ν)</div>,
    backHTML: <div className="english-side">so large, so much</div>
},
{
    id: 181,
    frontHTML: <div className="greek-side">σύν</div>,
    backHTML: <div className="english-side">with (+ dat. of accompaniment or means)</div>
},
{
    id: 182,
    frontHTML: <div className="greek-side">εἶτα</div>,
    backHTML: <div className="english-side">then, next</div>
},
{
    id: 183,
    frontHTML: <div className="greek-side">ἀληθής –ές</div>,
    backHTML: <div className="english-side">true</div>
},
{
    id: 184,
    frontHTML: <div className="greek-side">δίκαιος δικαία δίκαιον</div>,
    backHTML: <div className="english-side">right, just</div>
},
{
    id: 185,
    frontHTML: <div className="greek-side">μέλλω, μελλήσω, ἐμέλλησα</div>,
    backHTML: <div className="english-side">(+infin.) think of doing, intend to, be about to</div>
},
{
    id: 186,
    frontHTML: <div className="greek-side">ἐθέλω, ἐθελήσω, ἠθέλησα, ἠθέληκα</div>,
    backHTML: <div className="english-side">(+infin.) wish (to); be willing (to)</div>
},
{
    id: 187,
    frontHTML: <div className="greek-side">λοιπός –ή –όν</div>,
    backHTML: <div className="english-side">rest, remaining, rest-of-the</div>
},
{
    id: 188,
    frontHTML: <div className="greek-side">ἀνάγκη ἀνάγκης, ἡ</div>,
    backHTML: <div className="english-side">necessity</div>
},
{
    id: 189,
    frontHTML: <div className="greek-side">ὅτε</div>,
    backHTML: <div className="english-side">when, whenever (+indic. or opt.)</div>
},
{
    id: 190,
    frontHTML: <div className="greek-side">δεύτερος –α –ον</div>,
    backHTML: <div className="english-side">second</div>
},
{
    id: 191,
    frontHTML: <div className="greek-side">πόλεμος πολέμου ὁ</div>,
    backHTML: <div className="english-side">war</div>
},
{
    id: 192,
    frontHTML: <div className="greek-side">χώρα χώρας, ἡ</div>,
    backHTML: <div className="english-side">land; place</div>
},
{
    id: 193,
    frontHTML: <div className="greek-side">ζάω, ζήσω, ἔζησα, ἔζηκα</div>,
    backHTML: <div className="english-side">live</div>
},
{
    id: 194,
    frontHTML: <div className="greek-side">πλῆθος πλήθους, τό</div>,
    backHTML: <div className="english-side">mass, throng, crowd; number</div>
},
{
    id: 195,
    frontHTML: <div className="greek-side">ἥλιος ἡλίου, ὁ</div>,
    backHTML: <div className="english-side">sun</div>
},
{
    id: 196,
    frontHTML: <div className="greek-side">αἰτία αἰτίας, ἡ</div>,
    backHTML: <div className="english-side">cause, origin; charge, accusation</div>
},
{
    id: 197,
    frontHTML: <div className="greek-side">πείθω, πείσω, ἔπεισα, πέποιθα, πέπεισμαι, ἐπείσθην</div>,
    backHTML: <div className="english-side">persuade, win over; (mid. and pass.) obey, believe in, trust in (+dat.)</div>
},
{
    id: 198,
    frontHTML: <div className="greek-side">πάρειμι</div>,
    backHTML: <div className="english-side">be present, be ready or at hand; (impers.) πάρεστί μοι it depends on me, it is in my power; τὰ παρόντα the present circumstances; τὸ παρόν just now</div>
},
{
    id: 199,
    frontHTML: <div className="greek-side">πλεῖστος πλείστη πλεῖστον</div>,
    backHTML: <div className="english-side">most, greatest, largest (superl. of πολύς)</div>
},
{
    id: 200,
    frontHTML: <div className="greek-side">εἶδος εἴδους, τό</div>,
    backHTML: <div className="english-side">form, shape, figure; class, kind, sort</div>
},
{
    id: 201,
    frontHTML: <div className="greek-side">ὅπως</div>,
    backHTML: <div className="english-side">how, as; so that, in order that (+subj. or opt.)</div>
},
{
    id: 202,
    frontHTML: <div className="greek-side">τρεῖς τρία</div>,
    backHTML: <div className="english-side">three</div>
},
{
    id: 203,
    frontHTML: <div className="greek-side">βίος βίου, ὁ</div>,
    backHTML: <div className="english-side">life</div>
},
{
    id: 204,
    frontHTML: <div className="greek-side">νομίζω, νομιῶ, ἐνόμισα, νενόμικα, νενόμισμαι, ἐνομίσθην</div>,
    backHTML: <div className="english-side">think, believe that (+acc. and infin.); hold as a custom, be accustomed to (+infin.)</div>
},
{
    id: 205,
    frontHTML: <div className="greek-side">κύκλος κύκλου, ὁ</div>,
    backHTML: <div className="english-side">circle, ring, orb, disc, circular motion</div>
},
{
    id: 206,
    frontHTML: <div className="greek-side">πάθος πάθους, τό</div>,
    backHTML: <div className="english-side">incident, accident, misfortune, experience; passion, emotion; state, condition</div>
},
{
    id: 207,
    frontHTML: <div className="greek-side">πρό</div>,
    backHTML: <div className="english-side">before, in front of (+gen.)</div>
},
{
    id: 208,
    frontHTML: <div className="greek-side">πρό</div>,
    backHTML: <div className="english-side">before, in front of (+gen.)</div>
},
{
    id: 209,
    frontHTML: <div className="greek-side">μέντοι</div>,
    backHTML: <div className="english-side">however; of course</div>
},
{
    id: 210,
    frontHTML: <div className="greek-side">ὀνομάζω, ὀνομάσω, ὠνόμασα, ὠνόμακα, ὠνόμασμαι, ὠνομάσθην</div>,
    backHTML: <div className="english-side">call by name</div>
},
{
    id: 211,
    frontHTML: <div className="greek-side">ὑμέτερος ὑμετέρα ὑμέτερον</div>,
    backHTML: <div className="english-side">your, yours (pl.; σός = sg.)</div>
},
{
    id: 212,
    frontHTML: <div className="greek-side">ἀρετή ἀρετῆς, ἡ</div>,
    backHTML: <div className="english-side">goodness, excellence; virtue; valor, bravery</div>
},
{
    id: 213,
    frontHTML: <div className="greek-side">ἔτος ἔτους, τό</div>,
    backHTML: <div className="english-side">year</div>
},
{
    id: 214,
    frontHTML: <div className="greek-side">ἀντί</div>,
    backHTML: <div className="english-side">opposite (+gen.)</div>
},
{
    id: 215,
    frontHTML: <div className="greek-side">ναῦς νεώς, ἡ</div>,
    backHTML: <div className="english-side">ship</div>
},
{
    id: 216,
    frontHTML: <div className="greek-side">τρίτος –η –ον</div>,
    backHTML: <div className="english-side">third</div>
},
{
    id: 217,
    frontHTML: <div className="greek-side">πνεῦμα πνεύματος, τό</div>,
    backHTML: <div className="english-side">wind, breath, spirit</div>
},
{
    id: 218,
    frontHTML: <div className="greek-side">ὀρθός –ή –όν</div>,
    backHTML: <div className="english-side">upright, straight, true, regular</div>
},
{
    id: 219,
    frontHTML: <div className="greek-side">θάλασσα θαλάσσης, ἡ</div>,
    backHTML: <div className="english-side">the sea</div>
},
{
    id: 220,
    frontHTML: <div className="greek-side">διαφέρω, διοίσω, 1 aor. διήνεγκα, 2 aor. διήνεγκον, διενήνοχα, διενήνεγμαι</div>,
    backHTML: <div className="english-side">carry in different ways, spread; differ; (impers.) διαφέρει it makes a difference to (+dat.)</div>
},
{
    id: 221,
    frontHTML: <div className="greek-side">μέχρι</div>,
    backHTML: <div className="english-side">until (conj.); as far as, up to (prep. +gen.)</div>
},
{
    id: 222,
    frontHTML: <div className="greek-side">δόξα δόξης, ἡ</div>,
    backHTML: <div className="english-side">opinion, judgment; reputation, honor, glory</div>
},
{
    id: 223,
    frontHTML: <div className="greek-side">κεφαλή –ῆς, ἡ</div>,
    backHTML: <div className="english-side">head</div>
},
{
    id: 224,
    frontHTML: <div className="greek-side">πῦρ πυρός, τό</div>,
    backHTML: <div className="english-side">fire</div>
},
{
    id: 225,
    frontHTML: <div className="greek-side">ἐλάσσων ἔλασσον</div>,
    backHTML: <div className="english-side">smaller, less, fewer (comp. of μικρός)</div>
},
{
    id: 226,
    frontHTML: <div className="greek-side">πούς ποδός, ὁ</div>,
    backHTML: <div className="english-side">foot</div>
},
{
    id: 227,
    frontHTML: <div className="greek-side">ἱερός –ά –όν</div>,
    backHTML: <div className="english-side">holy, venerated, divine</div>
},
{
    id: 228,
    frontHTML: <div className="greek-side">εὐθύς εὐθεῖα εὐθύ</div>,
    backHTML: <div className="english-side">straight, direct; (adv.) immediately</div>
},
{
    id: 229,
    frontHTML: <div className="greek-side">εἶμι, infin. ἰέναι, ptc. ἰών, ἰοῦσα, ἰόν</div>,
    backHTML: <div className="english-side">I will go (fut. of ἔρχομαι)</div>
},
{
    id: 230,
    frontHTML: <div className="greek-side">ταχύς ταχεῖα ταχύ</div>,
    backHTML: <div className="english-side">quick, fast; (adv.) τάχα quickly; perhaps</div>
},
{
    id: 231,
    frontHTML: <div className="greek-side">ποταμός –οῦ, ὁ</div>,
    backHTML: <div className="english-side">river, stream</div>
},
{
    id: 232,
    frontHTML: <div className="greek-side">οὐσία οὐσίας, ἡ</div>,
    backHTML: <div className="english-side">substance, property; essence</div>
},
{
    id: 233,
    frontHTML: <div className="greek-side">ἀριθμός –οῦ, ὁ</div>,
    backHTML: <div className="english-side">number</div>
},
{
    id: 234,
    frontHTML: <div className="greek-side">ὕστερος ὑστέρα ὕστερον</div>,
    backHTML: <div className="english-side">coming after, following (+gen.); next, later; (adv.) ὕστερον afterwards</div>
},
{
    id: 235,
    frontHTML: <div className="greek-side">φυλάσσω, φυλάξω, ἐφύλαξα, πεφύλαχα, πεφύλαγμαι, ἐφυλάχθην</div>,
    backHTML: <div className="english-side">watch, guard, defend; (mid.) be on one’s guard against (+acc.)</div>
},
{
    id: 236,
    frontHTML: <div className="greek-side">καιρός καιροῦ, ὁ</div>,
    backHTML: <div className="english-side">the right time</div>
},
{
    id: 237,
    frontHTML: <div className="greek-side">οἰκέω, οἰκήσω, ᾤκησα, ᾤκηκα, ᾠκήθην</div>,
    backHTML: <div className="english-side">inhabit, occupy</div>
},
{
    id: 238,
    frontHTML: <div className="greek-side">ἀμφότερος ἀμφοτέρα ἀμφότερον</div>,
    backHTML: <div className="english-side">both</div>
},
{
    id: 239,
    frontHTML: <div className="greek-side">σημεῖον σημείου, τό</div>,
    backHTML: <div className="english-side">sign, signal, mark</div>
},
{
    id: 240,
    frontHTML: <div className="greek-side">παρέχω, παρέξω, παρέσχον, παρέσχηκα, impf. παρεῖχον</div>,
    backHTML: <div className="english-side">provide, present, offer; allow, grant</div>
},
{
    id: 241,
    frontHTML: <div className="greek-side">ἑκάτερος ἑκατέρα ἑκάτερον</div>,
    backHTML: <div className="english-side">each (of two)</div>
},
{
    id: 242,
    frontHTML: <div className="greek-side">δηλόω, δηλώσω, ἐδήλωσα, δεδήλωκα, ἐδηλώθην</div>,
    backHTML: <div className="english-side">show, declare, explain</div>
},
{
    id: 243,
    frontHTML: <div className="greek-side">οἰκεῖος οἰκεία οἰκεῖον</div>,
    backHTML: <div className="english-side">domestic, of the house; one’s own; fitting, suitable</div>
},
{
    id: 244,
    frontHTML: <div className="greek-side">κελεύω, κελεύσω, ἐκέλευσα, κεκέλευκα, κεκέλευσμαι, ἐκελεύσθην</div>,
    backHTML: <div className="english-side">order, bid, command (+acc. and infin.)</div>
},
{
    id: 245,
    frontHTML: <div className="greek-side">τέλος τέλους, τό</div>,
    backHTML: <div className="english-side">end, fulfillment, achievement</div>
},
{
    id: 246,
    frontHTML: <div className="greek-side">ἡγέομαι, ἡγήσομαι, ἡγησάμην, ἥγημαι</div>,
    backHTML: <div className="english-side">lead, be the leader; regard, believe, think</div>
},
{
    id: 247,
    frontHTML: <div className="greek-side">ἄξιος ἀξία ἄξιον</div>,
    backHTML: <div className="english-side">worthy, deserving</div>
},
{
    id: 248,
    frontHTML: <div className="greek-side">ἦ</div>,
    backHTML: <div className="english-side">truly (emphasizes what follows)</div>
},
{
    id: 249,
    frontHTML: <div className="greek-side">δῆλος δήλη δῆλον</div>,
    backHTML: <div className="english-side">visible, clear, manifest</div>
},
{
    id: 250,
    frontHTML: <div className="greek-side">τοίνυν (τοί-νυν)</div>,
    backHTML: <div className="english-side">therefore, accordingly (inferential); further, moreover (transitional)</div>
},
{
    id: 251,
    frontHTML: <div className="greek-side">πολέμιος πολεμία πολέμιον</div>,
    backHTML: <div className="english-side">hostile; οἱ πολέμιοι the enemy</div>
},
{
    id: 252,
    frontHTML: <div className="greek-side">ἔρομαι, ἐρήσομαι, 2 aor. ἠρόμην</div>,
    backHTML: <div className="english-side">ask, ask one about (+double acc.)</div>
},
{
    id: 253,
    frontHTML: <div className="greek-side">ἀδελφός –οῦ, ὁ</div>,
    backHTML: <div className="english-side">brother</div>
},
{
    id: 254,
    frontHTML: <div className="greek-side">μέγεθος μεγέθους, τό</div>,
    backHTML: <div className="english-side">greatness, size, magnitude</div>
},
{
    id: 255,
    frontHTML: <div className="greek-side">εἴτε…εἴτε</div>,
    backHTML: <div className="english-side">whether…or</div>
},
{
    id: 256,
    frontHTML: <div className="greek-side">κεῖμαι, κείσομαι</div>,
    backHTML: <div className="english-side">to lie, be situated, be laid up in store, be set up, be established or ordained (used as pf. pass. of τίθημι)</div>
},
{
    id: 257,
    frontHTML: <div className="greek-side">πολλάκις</div>,
    backHTML: <div className="english-side">often</div>
},
{
    id: 258,
    frontHTML: <div className="greek-side">πίνω, πίομαι, 2 aor. ἔπιον, πέπωκα, -πέπομαι, -επόθην</div>,
    backHTML: <div className="english-side">drink</div>
},
{
    id: 259,
    frontHTML: <div className="greek-side">χάρις χάριτος, ἡ</div>,
    backHTML: <div className="english-side">splendor, honor, glory; favor, goodwill, gratitude, thanks</div>
},
{
    id: 260,
    frontHTML: <div className="greek-side">ἔπειτα</div>,
    backHTML: <div className="english-side">then, next</div>
},
{
    id: 261,
    frontHTML: <div className="greek-side">ζητέω, ζητήσω, ἐζήτησα, ἐζήτηκα</div>,
    backHTML: <div className="english-side">seek</div>
},
{
    id: 262,
    frontHTML: <div className="greek-side">σχῆμα σχήματος, τό</div>,
    backHTML: <div className="english-side">form, figure, appearance, character</div>
},
{
    id: 263,
    frontHTML: <div className="greek-side">τροφή τροφῆς, ἡ</div>,
    backHTML: <div className="english-side">nourishment, food</div>
},
{
    id: 264,
    frontHTML: <div className="greek-side">μανθάνω, μαθήσομαι, ἔμαθον, μεμάθηκα</div>,
    backHTML: <div className="english-side">learn, ascertain</div>
},
{
    id: 265,
    frontHTML: <div className="greek-side">ἐνταῦθα</div>,
    backHTML: <div className="english-side">here, there</div>
},
{
    id: 266,
    frontHTML: <div className="greek-side">φεύγω, φεύξομαι, ἔφυγον, πέφευγα</div>,
    backHTML: <div className="english-side">flee, run away, avoid, shun</div>
},
{
    id: 267,
    frontHTML: <div className="greek-side">ἵππος ἵππου, ὁ</div>,
    backHTML: <div className="english-side">horse</div>
},
{
    id: 268,
    frontHTML: <div className="greek-side">κόσμος κόσμου, ὁ</div>,
    backHTML: <div className="english-side">order; ornament, decoration, adornment; world, universe</div>
},
{
    id: 269,
    frontHTML: <div className="greek-side">αἷμα αἵματος, τό</div>,
    backHTML: <div className="english-side">blood</div>
},
{
    id: 270,
    frontHTML: <div className="greek-side">αἱρέω, αἱρήσω, 2 aor. εἷλον, ᾕρηκα, ᾕρημαι, ᾑρέθην</div>,
    backHTML: <div className="english-side">take, grasp, take by force; (mid.) choose</div>
},
{
    id: 271,
    frontHTML: <div className="greek-side">προστίθημι, προσθήσω, προσέθηκα, προστέθηκα, προστέθειμαι (but commonly προσκεῖμαι instead), προσετέθην</div>,
    backHTML: <div className="english-side">add; (med.) join</div>
},
{
    id: 272,
    frontHTML: <div className="greek-side">ἀξιόω, ἀξιώσω, ἠξίωσα, ἠξίωκα, ἠξίωμαι, ἠξιώθην</div>,
    backHTML: <div className="english-side">consider worthy; require, demand, ask, claim</div>
},
{
    id: 273,
    frontHTML: <div className="greek-side">ἕως</div>,
    backHTML: <div className="english-side">until; while, so long as</div>
},
{
    id: 274,
    frontHTML: <div className="greek-side">νέος νέα νέον</div>,
    backHTML: <div className="english-side">young, new, fresh</div>
},
{
    id: 275,
    frontHTML: <div className="greek-side">ἔοικα, ptc. εἰκώς</div>,
    backHTML: <div className="english-side">be like, look like (+dat.); seem; befit</div>
},
{
    id: 276,
    frontHTML: <div className="greek-side">κἄν (καὶ-ἄν)</div>,
    backHTML: <div className="english-side">even if (+subj.)</div>
},
{
    id: 277,
    frontHTML: <div className="greek-side">καθίστημι, καταστήσω, κατέστησα, κατέστην, καθέστηκα, plupf. καθειστήκη, κατεστάθην</div>,
    backHTML: <div className="english-side">set down, establish; bring into a certain state, render</div>
},
{
    id: 278,
    frontHTML: <div className="greek-side">καθίστημι, καταστήσω, κατέστησα, κατέστην, καθέστηκα, plupf. καθειστήκη, κατεστάθην</div>,
    backHTML: <div className="english-side">set down, establish; bring into a certain state, render</div>
},
{
    id: 279,
    frontHTML: <div className="greek-side">τέχνη τέχνης, ἡ</div>,
    backHTML: <div className="english-side">art, skill, craft</div>
},
{
    id: 280,
    frontHTML: <div className="greek-side">χρῆμα χρήματος, τό</div>,
    backHTML: <div className="english-side">thing, matter; (more commonly in pl.) goods or property, esp. money</div>
},
{
    id: 281,
    frontHTML: <div className="greek-side">σῴζω, σώσω, ἔσωσα, σέσωκα, ἐσώθην</div>,
    backHTML: <div className="english-side">save</div>
},
{
    id: 282,
    frontHTML: <div className="greek-side">πέμπω, πέμψω, ἔπεμψα, πέπομφα, πέπεμμαι, ἐπέμφθην</div>,
    backHTML: <div className="english-side">send</div>
},
{
    id: 283,
    frontHTML: <div className="greek-side">φωνή φωνῆς, ἡ</div>,
    backHTML: <div className="english-side">sound, voice</div>
},
{
    id: 284,
    frontHTML: <div className="greek-side">ἕνεκα</div>,
    backHTML: <div className="english-side">on account of, for the sake of (+gen.)</div>
},
{
    id: 285,
    frontHTML: <div className="greek-side">ἀπόλλυμι, ἀπολῶ, ἀπώλεσα, 2 aor. mid. ἀπωλόμην, pf. ἀπολώλεκα (“I have utterly destroyed”) or ἀπόλωλα (“I am undone”)</div>,
    backHTML: <div className="english-side">kill, destroy; (mid.) perish, die</div>
},
{
    id: 286,
    frontHTML: <div className="greek-side">θάνατος θανάτου, ὁ</div>,
    backHTML: <div className="english-side">death</div>
},
{
    id: 287,
    frontHTML: <div className="greek-side">νύξ νυκτός, ἡ</div>,
    backHTML: <div className="english-side">night</div>
},
{
    id: 288,
    frontHTML: <div className="greek-side">ὁδός ὁδοῦ, ἡ</div>,
    backHTML: <div className="english-side">road, way, path</div>
},
{
    id: 289,
    frontHTML: <div className="greek-side">ἔθνος ἔθνους, τό</div>,
    backHTML: <div className="english-side">nation</div>
},
{
    id: 290,
    frontHTML: <div className="greek-side">ἀποδίδωμι, ἀποδώσω, ἀπέδωκα, ἀποδέδωκα, ἀποδέδομαι, ἀπεδόθην</div>,
    backHTML: <div className="english-side">give back; render; allow; (mid.) sell</div>
},
{
    id: 291,
    frontHTML: <div className="greek-side">νοῦς (νόος), νοῦ (νόου), ὁ</div>,
    backHTML: <div className="english-side">mind, perception, sense</div>
},
{
    id: 292,
    frontHTML: <div className="greek-side">μένω, μενῶ, ἔμεινα, μεμένηκα</div>,
    backHTML: <div className="english-side">stay, remain, endure, await</div>
},
{
    id: 293,
    frontHTML: <div className="greek-side">ἀποθνῄσκω, ἀποθανοῦμαι, 2 aor. ἀπέθανον, ἀποτέθνηκα</div>,
    backHTML: <div className="english-side">die</div>
},
{
    id: 294,
    frontHTML: <div className="greek-side">πάνυ</div>,
    backHTML: <div className="english-side">altogether, entirely</div>
},
{
    id: 295,
    frontHTML: <div className="greek-side">εὖ</div>,
    backHTML: <div className="english-side">well (opp. κακῶς); thoroughly, competently; happily, fortunately</div>
},
{
    id: 296,
    frontHTML: <div className="greek-side">κρίνω, κρινῶ, ἔκρινα, κέκρικα, κέκριμαι, ἐκρίθην</div>,
    backHTML: <div className="english-side">judge, decide, determine</div>
},
{
    id: 297,
    frontHTML: <div className="greek-side">ἀναιρέω, ἀναιρήσω, ἀνεῖλον, ἀνῄρηκα, ἀνῄρημαι, ἀνῃρέθην</div>,
    backHTML: <div className="english-side">raise, take up; kill, destroy</div>
},
{
    id: 298,
    frontHTML: <div className="greek-side">μακρός –ά –όν</div>,
    backHTML: <div className="english-side">long, tall, large, long-lasting</div>
},
{
    id: 299,
    frontHTML: <div className="greek-side">ἥκω, ἥξω, pf. ἧκα</div>,
    backHTML: <div className="english-side">I have come, I am present</div>
},
{
    id: 300,
    frontHTML: <div className="greek-side">ἡδονή –ῆς, ἡ</div>,
    backHTML: <div className="english-side">pleasure, enjoyment</div>
},
{
    id: 301,
    frontHTML: <div className="greek-side">μήτηρ μητρός, ἡ</div>,
    backHTML: <div className="english-side">mother</div>
},
{
    id: 302,
    frontHTML: <div className="greek-side">δεινός –ή –όν</div>,
    backHTML: <div className="english-side">awesome, terrible; clever, clever at (+infin.)</div>
},
{
    id: 303,
    frontHTML: <div className="greek-side">διαφορά –ᾶς, ἡ</div>,
    backHTML: <div className="english-side">difference, disagreement</div>
},
{
    id: 304,
    frontHTML: <div className="greek-side">κρατέω, κρατήσω, ἐκράτησα, κεκράτηκα, κεκράτημαι, ἐκρατήθην</div>,
    backHTML: <div className="english-side">be victorious, conquer, rule, surpass, excel (+gen.)</div>
},
{
    id: 305,
    frontHTML: <div className="greek-side">δῆμος δήμου, ὁ</div>,
    backHTML: <div className="english-side">the (common) people; country district (opp. πόλις)</div>
},
{
    id: 306,
    frontHTML: <div className="greek-side">οὐρανός –οῦ, ὁ</div>,
    backHTML: <div className="english-side">sky, heaven</div>
},
{
    id: 307,
    frontHTML: <div className="greek-side">ἕπομαι ἕψομαι, 2 aor. ἑσπόμην</div>,
    backHTML: <div className="english-side">follow</div>
},
{
    id: 308,
    frontHTML: <div className="greek-side">ἥσσων ἧσσον</div>,
    backHTML: <div className="english-side">less, weaker (comp. of κακός or μικρός)</div>
},
{
    id: 309,
    frontHTML: <div className="greek-side">ἥσσων ἧσσον</div>,
    backHTML: <div className="english-side">less, weaker (comp. of κακός or μικρός)</div>
},
{
    id: 310,
    frontHTML: <div className="greek-side">ὄρος ὄρους, τό</div>,
    backHTML: <div className="english-side">mountain, hill</div>
},
{
    id: 311,
    frontHTML: <div className="greek-side">πλήν</div>,
    backHTML: <div className="english-side">(prep.) except (+gen.); (conj.) except that, unless, but</div>
},
{
    id: 312,
    frontHTML: <div className="greek-side">τέσσαρες τέσσαρα</div>,
    backHTML: <div className="english-side">four</div>
},
{
    id: 313,
    frontHTML: <div className="greek-side">δυνατός –ή –όν</div>,
    backHTML: <div className="english-side">strong, powerful, able</div>
},
{
    id: 314,
    frontHTML: <div className="greek-side">οἶκος οἴκου, ὁ</div>,
    backHTML: <div className="english-side">house, home, family</div>
},
{
    id: 315,
    frontHTML: <div className="greek-side">ἄριστος ἀρίστη ἄριστον</div>,
    backHTML: <div className="english-side">best, noblest (superl. of ἀγαθός)</div>
},
{
    id: 316,
    frontHTML: <div className="greek-side">ῥᾴδιος ῥᾳδία ῥᾴδιον</div>,
    backHTML: <div className="english-side">easy</div>
},
{
    id: 317,
    frontHTML: <div className="greek-side">ἀφαιρέω, ἀφαιρήσω, ἀφεῖλον, ἀφῄρηκα, ἀφῄρημαι, ἀφῃρέθην</div>,
    backHTML: <div className="english-side">take from, take away</div>
},
{
    id: 318,
    frontHTML: <div className="greek-side">τύχη τύχης, ἡ</div>,
    backHTML: <div className="english-side">luck, fortune (good or bad), fate, chance</div>
},
{
    id: 319,
    frontHTML: <div className="greek-side">φανερός –ά –όν</div>,
    backHTML: <div className="english-side">clear, evident</div>
},
{
    id: 320,
    frontHTML: <div className="greek-side">πρόσωπον προσώπου, τό</div>,
    backHTML: <div className="english-side">face, mask, person</div>
},
{
    id: 321,
    frontHTML: <div className="greek-side">πιστεύω, πιστεύσω, ἐπίστευσα, πεπίστευκα, πεπίστευμαι, ἐπιστεύθην</div>,
    backHTML: <div className="english-side">trust, rely on, believe in (+dat.)</div>
},
{
    id: 322,
    frontHTML: <div className="greek-side">διδάσκω, διδάξω, ἐδίδαξα, δεδίδαχα, δεδίδαγμαι, ἐδιδάχθην</div>,
    backHTML: <div className="english-side">teach</div>
},
{
    id: 323,
    frontHTML: <div className="greek-side">ἄνω</div>,
    backHTML: <div className="english-side">up, upwards</div>
},
{
    id: 324,
    frontHTML: <div className="greek-side">τάσσω, τάξω, ἔταξα, τέταχα, τέταγμαι, ἐτάχθην</div>,
    backHTML: <div className="english-side">arrange, put in order</div>
},
{
    id: 325,
    frontHTML: <div className="greek-side">ὀφθαλμός –οῦ, ὁ</div>,
    backHTML: <div className="english-side">eye</div>
},
{
    id: 326,
    frontHTML: <div className="greek-side">δέχομαι, δέξομαι, ἐδεξάμην, δέδεγμαι, -εδέχθην</div>,
    backHTML: <div className="english-side">take, accept; welcome, entertain</div>
},
{
    id: 327,
    frontHTML: <div className="greek-side">ἀφικνέομαι, ἀφίξομαι, 2 aor. ἀφικόμην, ἀφῖγμαι</div>,
    backHTML: <div className="english-side">come to, arrive at</div>
},
{
    id: 328,
    frontHTML: <div className="greek-side">ἱκανός –ή –όν</div>,
    backHTML: <div className="english-side">sufficient, enough; competent, able to (+infin.)</div>
},
{
    id: 329,
    frontHTML: <div className="greek-side">ἐργάζομαι, ἐργάσομαι, εἰργασάμην, εἴργασμαι</div>,
    backHTML: <div className="english-side">work, labor</div>
},
{
    id: 330,
    frontHTML: <div className="greek-side">μάχη μάχης, ἡ</div>,
    backHTML: <div className="english-side">battle</div>
},
{
    id: 331,
    frontHTML: <div className="greek-side">τρέφω, θρέψω, ἔθρεψα, τέθραμμαι, ἐτράφην</div>,
    backHTML: <div className="english-side">nourish, feed, support, maintain; rear, educate</div>
},
{
    id: 332,
    frontHTML: <div className="greek-side">ἀδύνατος –ον</div>,
    backHTML: <div className="english-side">impossible; powerless</div>
},
{
    id: 333,
    frontHTML: <div className="greek-side">ἀκριβής –ές</div>,
    backHTML: <div className="english-side">exact, accurate, precise</div>
},
{
    id: 334,
    frontHTML: <div className="greek-side">που</div>,
    backHTML: <div className="english-side">(enclitic) somewhere; I suppose, perhaps (to qualify an assertion)</div>
},
{
    id: 335,
    frontHTML: <div className="greek-side">ὅθεν</div>,
    backHTML: <div className="english-side">from where, whence</div>
},
{
    id: 336,
    frontHTML: <div className="greek-side">στόμα στόματος, τό</div>,
    backHTML: <div className="english-side">mouth, face, opening</div>
},
{
    id: 337,
    frontHTML: <div className="greek-side">χωρίς</div>,
    backHTML: <div className="english-side">separately, apart; (+gen.) without, separate from</div>
},
{
    id: 338,
    frontHTML: <div className="greek-side">κρείσσων κρεῖσσον</div>,
    backHTML: <div className="english-side">stronger, mightier; better, more excellent (comp. of ἀγαθός)</div>
},
{
    id: 339,
    frontHTML: <div className="greek-side">βραχύς βραχεῖα βραχύ</div>,
    backHTML: <div className="english-side">brief, short</div>
},
{
    id: 340,
    frontHTML: <div className="greek-side">ἰσχυρός –ά –όν</div>,
    backHTML: <div className="english-side">strong</div>
},
{
    id: 341,
    frontHTML: <div className="greek-side">ἀλήθεια ἀληθείας, ἡ</div>,
    backHTML: <div className="english-side">truth</div>
},
{
    id: 342,
    frontHTML: <div className="greek-side">δίκη δίκης, ἡ</div>,
    backHTML: <div className="english-side">justice, lawsuit, trial, penalty</div>
},
{
    id: 343,
    frontHTML: <div className="greek-side">χωρίον χωρίου, τό</div>,
    backHTML: <div className="english-side">place, spot, district</div>
},
{
    id: 344,
    frontHTML: <div className="greek-side">ἡδύς ἡδεῖα ἡδύ</div>,
    backHTML: <div className="english-side">sweet, pleasant</div>
},
{
    id: 345,
    frontHTML: <div className="greek-side">νόσος νόσου, ἡ</div>,
    backHTML: <div className="english-side">disease, sickness</div>
},
{
    id: 346,
    frontHTML: <div className="greek-side">λίθος λίθου, ὁ</div>,
    backHTML: <div className="english-side">stone</div>
},
{
    id: 347,
    frontHTML: <div className="greek-side">παλαιός –ά –όν</div>,
    backHTML: <div className="english-side">old, ancient</div>
},
{
    id: 348,
    frontHTML: <div className="greek-side">ἀφίημι, ἀφήσω, ἀφῆκα, ἀφεῖκα, ἀφεῖμαι, ἀφείθην</div>,
    backHTML: <div className="english-side">send away, let go; let alone, neglect</div>
},
{
    id: 349,
    frontHTML: <div className="greek-side">ἄλλως</div>,
    backHTML: <div className="english-side">otherwise</div>
},
{
    id: 350,
    frontHTML: <div className="greek-side">πρᾶξις πράξεως, ἡ</div>,
    backHTML: <div className="english-side">action, transaction, business</div>
},
{
    id: 351,
    frontHTML: <div className="greek-side">σαφής σαφές</div>,
    backHTML: <div className="english-side">clear, distinct, plain</div>
},
{
    id: 352,
    frontHTML: <div className="greek-side">σοφός –ή –όν</div>,
    backHTML: <div className="english-side">wise, clever, skilled</div>
},
{
    id: 353,
    frontHTML: <div className="greek-side">νικάω, νικήσω, ἐνίκησα, νενίκηκα, νενίκημαι, ἐνικήθην</div>,
    backHTML: <div className="english-side">conquer, win</div>
},
{
    id: 354,
    frontHTML: <div className="greek-side">ὁμολογέω, ὁμολογήσω, ὡμολόγησα, ὡμολόγηκα, ὡμολόγημαι, ὡμολογήθην</div>,
    backHTML: <div className="english-side">agree with, say the same thing as (+dat.)</div>
},
{
    id: 355,
    frontHTML: <div className="greek-side">ναός (νεώς) ναοῦ (νεώ), ὁ</div>,
    backHTML: <div className="english-side">temple</div>
},
{
    id: 356,
    frontHTML: <div className="greek-side">αὖ, αὖθις</div>,
    backHTML: <div className="english-side">moreover; on the other hand; back (again)</div>
},
{
    id: 357,
    frontHTML: <div className="greek-side">πατρίς πατρίδος, ἡ</div>,
    backHTML: <div className="english-side">fatherland</div>
},
{
    id: 358,
    frontHTML: <div className="greek-side">ὀξύς ὀξεῖα ὀξύ</div>,
    backHTML: <div className="english-side">sharp, keen, shrill, pungent</div>
},
{
    id: 359,
    frontHTML: <div className="greek-side">καίτοι (καί-τοι)</div>,
    backHTML: <div className="english-side">and indeed, and yet</div>
},
{
    id: 360,
    frontHTML: <div className="greek-side">πλέον</div>,
    backHTML: <div className="english-side">more, rather</div>
},
{
    id: 361,
    frontHTML: <div className="greek-side">πλέων πλέον</div>,
    backHTML: <div className="english-side">more, larger (comp. of πολύς)</div>
},
{
    id: 362,
    frontHTML: <div className="greek-side">γνώμη γνώμης, ἡ</div>,
    backHTML: <div className="english-side">thought, intelligence, opinion, purpose</div>
},
{
    id: 363,
    frontHTML: <div className="greek-side">τιμή τιμῆς, ἡ</div>,
    backHTML: <div className="english-side">honor, esteem; price, value; office, magistracy</div>
},
{
    id: 364,
    frontHTML: <div className="greek-side">μεταξύ</div>,
    backHTML: <div className="english-side">between (prep. + gen.); in the midst of (adv.)</div>
},
{
    id: 365,
    frontHTML: <div className="greek-side">προσήκω προσήξω</div>,
    backHTML: <div className="english-side">belong to, have to do with; be fitting for (+dat.); arrive at; οἱ προσήκοντες relatives; τὰ προσήκoντα duties</div>
},
{
    id: 366,
    frontHTML: <div className="greek-side">πρίν</div>,
    backHTML: <div className="english-side">before, until</div>
},
{
    id: 367,
    frontHTML: <div className="greek-side">πρίν</div>,
    backHTML: <div className="english-side">before, until</div>
},
{
    id: 368,
    frontHTML: <div className="greek-side">ἀδικέω, ἀδικήσω, ἠδίκησα, ἠδίκηκα, ἠδίκημαι, ἠδικήθην</div>,
    backHTML: <div className="english-side">do wrong; injure</div>
},
{
    id: 369,
    frontHTML: <div className="greek-side">στρατηγός –οῦ, ὁ</div>,
    backHTML: <div className="english-side">leader of an army, commander, general</div>
},
{
    id: 370,
    frontHTML: <div className="greek-side">οὐκέτι</div>,
    backHTML: <div className="english-side">no longer, no more</div>
},
{
    id: 371,
    frontHTML: <div className="greek-side">πρέσβυς πρέσβεως, ὁ</div>,
    backHTML: <div className="english-side">old man; (pl.) ambassadors</div>
},
{
    id: 372,
    frontHTML: <div className="greek-side">παύω, παύσω, ἔπαυσα, πέπαυκα, πέπαυμαι, ἐπαύθην</div>,
    backHTML: <div className="english-side">stop, put an end to; (mid.) cease</div>
},
{
    id: 373,
    frontHTML: <div className="greek-side">τελευτάω, τελευτήσω, ἐτελεύτησα, τετελεύτηκα, τετελεύτημαι, ἐτελευτήθην</div>,
    backHTML: <div className="english-side">finish; die</div>
},
{
    id: 374,
    frontHTML: <div className="greek-side">μίγνυμι, μείξω, ἔμειξα, μέμειγμαι, ἐμείχθην</div>,
    backHTML: <div className="english-side">mix, mingle</div>
},
{
    id: 375,
    frontHTML: <div className="greek-side">λαός λαοῦ, ὁ</div>,
    backHTML: <div className="english-side">the people, folk</div>
},
{
    id: 376,
    frontHTML: <div className="greek-side">θυγάτηρ θυγατρός, ἡ</div>,
    backHTML: <div className="english-side">daughter</div>
},
{
    id: 377,
    frontHTML: <div className="greek-side">οἰκία οἰκίας, ἡ</div>,
    backHTML: <div className="english-side">building, house, dwelling</div>
},
{
    id: 378,
    frontHTML: <div className="greek-side">παραδίδωμι, παραδώσω, παρέδωκα, παραδέδωκα, παραδέδομαι, παρεδόθην</div>,
    backHTML: <div className="english-side">transmit, hand over, surrender</div>
},
{
    id: 379,
    frontHTML: <div className="greek-side">ἔξω</div>,
    backHTML: <div className="english-side">outside; except</div>
},
{
    id: 380,
    frontHTML: <div className="greek-side">νῆσος νήσου, ἡ</div>,
    backHTML: <div className="english-side">island</div>
},
{
    id: 381,
    frontHTML: <div className="greek-side">ἐκεῖ</div>,
    backHTML: <div className="english-side">there</div>
},
{
    id: 382,
    frontHTML: <div className="greek-side">ἐπιστήμη –ης, ἡ</div>,
    backHTML: <div className="english-side">knowledge, understanding, skill</div>
},
{
    id: 383,
    frontHTML: <div className="greek-side">ἐάω, ἐάσω, εἴασα</div>,
    backHTML: <div className="english-side">allow, permit (+acc. and infin.); let be, let alone</div>
},
{
    id: 384,
    frontHTML: <div className="greek-side">θαυμάζω, θαυμάσομαι, ἐθαύμασα, τεθαύμακα, τεθαύμασμαι, ἐθαυμάσθην</div>,
    backHTML: <div className="english-side">to be in awe (of), be astonished (at)</div>
},
{
    id: 385,
    frontHTML: <div className="greek-side">αἰσθάνομαι, αἰσθήσομαι, 2 aor. ᾐσθόμην, ᾔσθημαι</div>,
    backHTML: <div className="english-side">perceive, understand, hear, learn</div>
},
{
    id: 386,
    frontHTML: <div className="greek-side">χαίρω, χαιρήσω, κεχάρηκα, κεχάρημαι, ἐχάρην</div>,
    backHTML: <div className="english-side">to be happy, rejoice at (+dat.), take joy in (+ptc.); χαῖρε, (pl.) χαίρετε hello, goodbye</div>
},
{
    id: 387,
    frontHTML: <div className="greek-side">χαλεπός –ή –όν</div>,
    backHTML: <div className="english-side">difficult, troublesome</div>
},
{
    id: 388,
    frontHTML: <div className="greek-side">τέκνον τέκνου, τό</div>,
    backHTML: <div className="english-side">child</div>
},
{
    id: 389,
    frontHTML: <div className="greek-side">καταλαμβάνω, καταλήψομαι, κατέλαβον, κατείληφα, κατείλημμαι, κατελήφθην</div>,
    backHTML: <div className="english-side">seize, catch up with, arrest, compel</div>
},
{
    id: 390,
    frontHTML: <div className="greek-side">μάχομαι, μαχοῦμαι, ἐμαχεσάμην, μεμάχημαι</div>,
    backHTML: <div className="english-side">fight (against) (+dat.)</div>
},
{
    id: 391,
    frontHTML: <div className="greek-side">μιμνήσκω, -μνήσω, -έμνησα, pf. μέμνημαι, ἐμνήσθην</div>,
    backHTML: <div className="english-side">remind; (in pf. mid.) remember</div>
},
{
    id: 392,
    frontHTML: <div className="greek-side">θνῄσκω, 2 aor. -έθανον, τέθνηκα, θανοῦμαι</div>,
    backHTML: <div className="english-side">to die, be dying</div>
},
{
    id: 393,
    frontHTML: <div className="greek-side">λύω, λύσω, ἔλυσα, λέλυκα, λέλυμαι, ἐλύθην</div>,
    backHTML: <div className="english-side">loosen, unbind, set free; undo, destroy</div>
},
{
    id: 394,
    frontHTML: <div className="greek-side">τιμάω, τιμήσω, ἐτίμησα, τετίμηκα, τετίμημαι, ἐτιμήθην</div>,
    backHTML: <div className="english-side">to honor</div>
},
{
    id: 395,
    frontHTML: <div className="greek-side">τεῖχος τείχους, τό</div>,
    backHTML: <div className="english-side">wall</div>
},
{
    id: 396,
    frontHTML: <div className="greek-side">ἴσως</div>,
    backHTML: <div className="english-side">equally, probably, perhaps</div>
},
{
    id: 397,
    frontHTML: <div className="greek-side">αἴρω, ἀρῶ, ἦρα, ἦρκα, ἦρμαι, ἤρθην</div>,
    backHTML: <div className="english-side">take up, lift up; remove</div>
},
{
    id: 398,
    frontHTML: <div className="greek-side">ἀποκτείνω, ἀποκτενῶ, ἀπέκτεινα, ἀπέκτονα</div>,
    backHTML: <div className="english-side">kill</div>
},
{
    id: 399,
    frontHTML: <div className="greek-side">στρατιώτης –ου, ὁ</div>,
    backHTML: <div className="english-side">soldier</div>
},
{
    id: 400,
    frontHTML: <div className="greek-side">ἄνευ</div>,
    backHTML: <div className="english-side">without (+gen.)</div>
},
{
    id: 401,
    frontHTML: <div className="greek-side">πότερος ποτέρα πότερον</div>,
    backHTML: <div className="english-side">which of the two? πότερον whether</div>
},
{
    id: 402,
    frontHTML: <div className="greek-side">ἁπλῶς</div>,
    backHTML: <div className="english-side">simply, singly, in one way</div>
},
{
    id: 403,
    frontHTML: <div className="greek-side">πίπτω, πεσοῦμαι, ἔπεσον, πέπτωκα</div>,
    backHTML: <div className="english-side">fall, fall down</div>
},
{
    id: 404,
    frontHTML: <div className="greek-side">τέταρτος –η –ον</div>,
    backHTML: <div className="english-side">fourth</div>
},
{
    id: 405,
    frontHTML: <div className="greek-side">κατασκευάζω, κατασκευάσω, κατεσκεύασα</div>,
    backHTML: <div className="english-side">equip, furnish, make ready</div>
},
{
    id: 406,
    frontHTML: <div className="greek-side">ἐχθρός –ά –όν</div>,
    backHTML: <div className="english-side">hated, hateful; hostile to (+dat.)</div>
},
{
    id: 407,
    frontHTML: <div className="greek-side">ἀγών ἀγῶνος, ὁ</div>,
    backHTML: <div className="english-side">contest; struggle</div>
},
{
    id: 408,
    frontHTML: <div className="greek-side">κωλύω, κωλύσω, ἐκώλυσα, κεκώλυκα, κεκώλυμαι, ἐκωλύθην</div>,
    backHTML: <div className="english-side">hinder, check, prevent (+acc. and infin.)</div>
},
{
    id: 409,
    frontHTML: <div className="greek-side">ἁμαρτάνω, ἁμαρτήσομαι, ἡμάρτησα, 2 aor. ἥμαρτον, ἡμάρτηκα, ἡμάρτημαι, ἡμαρτήθην</div>,
    backHTML: <div className="english-side">miss the mark (+gen.); fail, be wrong, make a mistake</div>
},
{
    id: 410,
    frontHTML: <div className="greek-side">διαφθείρω, διαφθερῶ, διέφθειρα, διέφθαρκα, διέφθαρμαι, διεφθάρην</div>,
    backHTML: <div className="english-side">destroy; corrupt</div>
},
{
    id: 411,
    frontHTML: <div className="greek-side">πως</div>,
    backHTML: <div className="english-side">(enclitic) somehow, in some way, in any way</div>
},
{
    id: 412,
    frontHTML: <div className="greek-side">πόνος πόνου, ὁ</div>,
    backHTML: <div className="english-side">work, labor; stress, trouble, pain</div>
},
{
    id: 413,
    frontHTML: <div className="greek-side">ἔνθα</div>,
    backHTML: <div className="english-side">there</div>
},
{
    id: 414,
    frontHTML: <div className="greek-side">τάξις τάξεως, ἡ</div>,
    backHTML: <div className="english-side">arrangement, order; military unit</div>
},
{
    id: 415,
    frontHTML: <div className="greek-side">πειράω (usually mid. πειράομαι), πειράσομαι, ἐπείρασα, πεπείραμαι, ἐπειράθην</div>,
    backHTML: <div className="english-side">attempt, try, make a trial of (+gen.)</div>
},
{
    id: 416,
    frontHTML: <div className="greek-side">φοβέω, φοβήσω, ἐφόβησα, πεφόβημαι, ἐφοβήθην</div>,
    backHTML: <div className="english-side">put to flight; (mid. and pass.) flee, fear</div>
},
{
    id: 417,
    frontHTML: <div className="greek-side">βάλλω, βαλῶ, 2 aor. ἔβαλον, βέβληκα, βέβλημαι, ἐβλήθην</div>,
    backHTML: <div className="english-side">throw, hurl; throw at, hit (acc.) with (dat.)</div>
},
{
    id: 418,
    frontHTML: <div className="greek-side">πονηρός –ά –όν</div>,
    backHTML: <div className="english-side">worthless, bad, wicked</div>
},
{
    id: 419,
    frontHTML: <div className="greek-side">ξένος ξένου, ὁ</div>,
    backHTML: <div className="english-side">guest-friend; foreigner, stranger</div>
},
{
    id: 420,
    frontHTML: <div className="greek-side">βάρβαρος –ον</div>,
    backHTML: <div className="english-side">non-Greek, foreign; barbarous</div>
},
{
    id: 421,
    frontHTML: <div className="greek-side">ὅπου</div>,
    backHTML: <div className="english-side">where, wherever</div>
},
{
    id: 422,
    frontHTML: <div className="greek-side">συμφέρω, συνοίσω, 1 aor. συνήνεγκα</div>,
    backHTML: <div className="english-side">benefit, be useful or profitable to (+dat.); (impers.) συμφέρει it is of use, expedient (+infin.); τὸ συμφέρον use, profit, advantage</div>
},
{
    id: 423,
    frontHTML: <div className="greek-side">πυνθάνομαι, πεύσομαι, 2 aor. ἐπυθόμην, πέπυσμαι</div>,
    backHTML: <div className="english-side">learn, hear, inquire concerning (+gen.)</div>
},
{
    id: 424,
    frontHTML: <div className="greek-side">δοῦλος δούλου, ὁ</div>,
    backHTML: <div className="english-side">slave</div>
},
{
    id: 425,
    frontHTML: <div className="greek-side">τέμνω, τεμῶ, 2 aor. ἔτεμον, -τέτμηκα, τέτμημαι, ἐτμήθην</div>,
    backHTML: <div className="english-side">cut, cut down, cut to pieces</div>
},
{
    id: 426,
    frontHTML: <div className="greek-side">χρήσιμος χρησίμη χρήσιμον</div>,
    backHTML: <div className="english-side">useful, serviceable</div>
},
{
    id: 427,
    frontHTML: <div className="greek-side">ποῖος ποία ποῖον</div>,
    backHTML: <div className="english-side">what sort of?</div>
},
{
    id: 428,
    frontHTML: <div className="greek-side">ὅπλον ὅπλου, τό</div>,
    backHTML: <div className="english-side">weapon, tool, implement (mostly pl.)</div>
},
{
    id: 429,
    frontHTML: <div className="greek-side">πίστις πίστεως, ἡ</div>,
    backHTML: <div className="english-side">trust in others, faith; that which gives confidence, assurance, pledge, guarantee</div>
},
{
    id: 430,
    frontHTML: <div className="greek-side">ὑπολαμβάνω, ὑπολήψομαι, ὑπέλαβον, ὑπείληφα, ὑπείλημμαι, ὑπελήφθην</div>,
    backHTML: <div className="english-side">take up, seize; answer, reply; assume, suppose</div>
},
{
    id: 431,
    frontHTML: <div className="greek-side">ποιητής –οῦ, ὁ</div>,
    backHTML: <div className="english-side">creator, poet</div>
},
{
    id: 432,
    frontHTML: <div className="greek-side">λανθάνω, λήσω, ἔλαθον, λέληθα</div>,
    backHTML: <div className="english-side">escape the notice of (+acc. and nom. participle), be unknown; (mid. and pass.) forget</div>
},
{
    id: 433,
    frontHTML: <div className="greek-side">βελτίων βέλτιον</div>,
    backHTML: <div className="english-side">better (comp. of ἀγαθός)</div>
},
{
    id: 434,
    frontHTML: <div className="greek-side">πάντως</div>,
    backHTML: <div className="english-side">altogether, in all ways; at any rate</div>
},
{
    id: 435,
    frontHTML: <div className="greek-side">πορεύω, πορεύσω, ἐπόρευσα, πεπόρευμαι, ἐπορεύθην</div>,
    backHTML: <div className="english-side">carry; (mid. and pass) go, walk, march</div>
},
{
    id: 436,
    frontHTML: <div className="greek-side">ἀποκρίνω, ἀποκρινῶ, ἀπεκρινάμην, ἀπεκρίθη</div>,
    backHTML: <div className="english-side">separate, set apart, choοse; (mid.) answer, reply</div>
},
{
    id: 437,
    frontHTML: <div className="greek-side">πέντε</div>,
    backHTML: <div className="english-side">five</div>
},
{
    id: 438,
    frontHTML: <div className="greek-side">κίνδυνος κινδύνου, ὁ</div>,
    backHTML: <div className="english-side">danger</div>
},
{
    id: 439,
    frontHTML: <div className="greek-side">κατηγορέω, κατηγορήσω, κατηγόρησα, κατηγόρηκα, κατηγόρημαι, κατηγορήθην</div>,
    backHTML: <div className="english-side">to speak against, to accuse (+gen.)</div>
},
{
    id: 440,
    frontHTML: <div className="greek-side">τρέπω, τρέψω, ἔτρεψα, τέτροφα, ἐτράπην</div>,
    backHTML: <div className="english-side">turn, direct towards a thing; put to flight, defeat; (pass.) turn one’s steps in a certain direction, go</div>
},
{
    id: 441,
    frontHTML: <div className="greek-side">ὅμως</div>,
    backHTML: <div className="english-side">nevertheless, all the same, notwithstanding</div>
},
{
    id: 442,
    frontHTML: <div className="greek-side">ὅμως</div>,
    backHTML: <div className="english-side">nevertheless, all the same, notwithstanding</div>
},
{
    id: 443,
    frontHTML: <div className="greek-side">θεῖος θεία θεῖον</div>,
    backHTML: <div className="english-side">divine</div>
},
{
    id: 444,
    frontHTML: <div className="greek-side">ἱππεύς ἱππέως, ὁ</div>,
    backHTML: <div className="english-side">horseman, rider, charioteer</div>
},
{
    id: 445,
    frontHTML: <div className="greek-side">κτάομαι, κτήσομαι, ἐκτησάμην, κέκτημαι</div>,
    backHTML: <div className="english-side">get, gain, acquire</div>
},
{
    id: 446,
    frontHTML: <div className="greek-side">λείπω, λείψω, ἔλιπον, λέλοιπα, λέλειμμαι, ἐλείφθην</div>,
    backHTML: <div className="english-side">leave, abandon</div>
},
{
    id: 447,
    frontHTML: <div className="greek-side">βουλή βουλῆς, ἡ</div>,
    backHTML: <div className="english-side">will, determination; counsel, piece of advice; council of elders</div>
},
{
    id: 448,
    frontHTML: <div className="greek-side">ἐλπίς ἐλπίδος, ἡ</div>,
    backHTML: <div className="english-side">hope; expectation</div>
},
{
    id: 449,
    frontHTML: <div className="greek-side">γραφή γραφῆς, ἡ</div>,
    backHTML: <div className="english-side">a drawing, painting, writing; indictment</div>
},
{
    id: 450,
    frontHTML: <div className="greek-side">τίκτω, τέξω or τέξομαι, ἔτεκον, τέτοκα, τέτεγμαι, ἐτέχθην</div>,
    backHTML: <div className="english-side">beget, give birth to, produce</div>
},
{
    id: 451,
    frontHTML: <div className="greek-side">κομίζω, κομιῶ, ἐκόμισα, κεκόμικα, κεκόμισμαι, ἐκομίσθην</div>,
    backHTML: <div className="english-side">take care of, provide for</div>
},
{
    id: 452,
    frontHTML: <div className="greek-side">θυμός θυμοῦ, ὁ</div>,
    backHTML: <div className="english-side">life, spirit; soul, heart, mind</div>
},
{
    id: 453,
    frontHTML: <div className="greek-side">βλέπω, βλέψομαι, ἔβλεψα</div>,
    backHTML: <div className="english-side">see, look (at)</div>
},
{
    id: 454,
    frontHTML: <div className="greek-side">φόβος φόβου, ὁ</div>,
    backHTML: <div className="english-side">panic, fear, flight</div>
},
{
    id: 455,
    frontHTML: <div className="greek-side">πολιτεία –ας, ἡ</div>,
    backHTML: <div className="english-side">constitution, citizenship, republic</div>
},
{
    id: 456,
    frontHTML: <div className="greek-side">στάδιον σταδίου, τό (pl. στάδια and στάδιοι)</div>,
    backHTML: <div className="english-side">stadion or stade, the longest Greek unit of linear measure, about 185 meters</div>
},
{
    id: 457,
    frontHTML: <div className="greek-side">φρονέω, φρονήσω, ἐφρόνησα</div>,
    backHTML: <div className="english-side">think, intend to (+infin.); be minded towards (+adv. and dat.)</div>
},
{
    id: 458,
    frontHTML: <div className="greek-side">τοιόσδε τοιάδε τοιόνδε</div>,
    backHTML: <div className="english-side">such (as this), of such a sort (as this)</div>
},
{
    id: 459,
    frontHTML: <div className="greek-side">ὁρμάω, ὁρμήσω, ὥρμησα, ὥρμηκα, ὥρμημαι, ὡρμήθην</div>,
    backHTML: <div className="english-side">set in motion, urge on; (intrans.) start, hasten on</div>
},
{
    id: 460,
    frontHTML: <div className="greek-side">παρασκευάζω, παρασκευάσω, παρεσκεύασα</div>,
    backHTML: <div className="english-side">get ready, prepare, provide</div>
},
{
    id: 461,
    frontHTML: <div className="greek-side">λαλέω, λαλήσω, ἐλάλησα, λελάληκα, ἐλαλήθην</div>,
    backHTML: <div className="english-side">talk, chatter, babble</div>
},
{
    id: 462,
    frontHTML: <div className="greek-side">δράω, δράσω, ἔδρασα, δέδρακα, δέδραμαι, ἐδράσθην</div>,
    backHTML: <div className="english-side">do, accomplish</div>
},
{
    id: 463,
    frontHTML: <div className="greek-side">σκοπέω, σκοπήσω, ἐσκόπησα</div>,
    backHTML: <div className="english-side">look at, watch; look into, consider, examine</div>
},
{
    id: 464,
    frontHTML: <div className="greek-side">βοῦς βοός, ὁ/ἡ</div>,
    backHTML: <div className="english-side">bull, ox, cow</div>
},
{
    id: 465,
    frontHTML: <div className="greek-side">ἡμέτερος ἡμετέρα ἡμέτρον</div>,
    backHTML: <div className="english-side">our</div>
},
{
    id: 466,
    frontHTML: <div className="greek-side">γράμμα γράμματος, τό</div>,
    backHTML: <div className="english-side">letter, written character; (pl.) piece of writing, document(s)</div>
},
{
    id: 467,
    frontHTML: <div className="greek-side">ἐρωτάω, ἐρήσομαι, 2 aor. ἠρόμην</div>,
    backHTML: <div className="english-side">ask someone (acc.) something (acc.); question, beg</div>
},
{
    id: 468,
    frontHTML: <div className="greek-side">πολεμέω, πολεμήσω, ἐπολέμησα, πεπολέμηκα</div>,
    backHTML: <div className="english-side">make war</div>
},
{
    id: 469,
    frontHTML: <div className="greek-side">θύω, θύσω, ἔθυσα, τέθυκα, τέθυμαι, ἐτύθην</div>,
    backHTML: <div className="english-side">sacrifice</div>
},
{
    id: 470,
    frontHTML: <div className="greek-side">ἐλαύνω, ἐλῶ, ἤλασα, -ελήλακα, ἐλήλαμαι, ἠλάθην</div>,
    backHTML: <div className="english-side">drive, set in motion</div>
},
{
    id: 471,
    frontHTML: <div className="greek-side">δέδοικα, δείσομαι, ἔδεισα</div>,
    backHTML: <div className="english-side">fear</div>
},
{
    id: 472,
    frontHTML: <div className="greek-side">σύμμαχος –ον</div>,
    backHTML: <div className="english-side">allied with (+dat.); οἱ σύμμαχοι allies</div>
},
{
    id: 473,
    frontHTML: <div className="greek-side">ἡγεμών ἡγεμόνος, ὁ</div>,
    backHTML: <div className="english-side">guide, leader, commander</div>
},
{
    id: 474,
    frontHTML: <div className="greek-side">βαρύς βαρεῖα βαρύ</div>,
    backHTML: <div className="english-side">heavy, grievous, tiresome</div>
},
{
    id: 475,
    frontHTML: <div className="greek-side">ὧδε</div>,
    backHTML: <div className="english-side">thus, in this way; hither, here</div>
},
{
    id: 476,
    frontHTML: <div className="greek-side">αἰσχρός –ά –όν</div>,
    backHTML: <div className="english-side">ugly, shameful, disgraceful</div>
},
{
    id: 477,
    frontHTML: <div className="greek-side">εἰρήνη εἰρήνης, ἡ</div>,
    backHTML: <div className="english-side">peace</div>
},
{
    id: 478,
    frontHTML: <div className="greek-side">ἁλίσκομαι, ἁλώσομαι, 2 aor. ἑάλων, ἑάλωκα</div>,
    backHTML: <div className="english-side">to be taken, conquered (act. supplied by αἱρέω)</div>
},
{
    id: 479,
    frontHTML: <div className="greek-side">δέκα</div>,
    backHTML: <div className="english-side">ten</div>
},
{
    id: 480,
    frontHTML: <div className="greek-side">ἀμείνων ἄμεινον</div>,
    backHTML: <div className="english-side">better, abler, stronger, braver (comp. of ἀγαθός)</div>
},
{
    id: 481,
    frontHTML: <div className="greek-side">χείρων χεῖρον</div>,
    backHTML: <div className="english-side">worse, inferior (comp. of κακός)</div>
},
{
    id: 482,
    frontHTML: <div className="greek-side">βοηθέω, βοηθήσω, ἐβοήθησα, βεβοήθηκα</div>,
    backHTML: <div className="english-side">help, assist (+dat.)</div>
},
{
    id: 483,
    frontHTML: <div className="greek-side">λαμπρός –ά –όν</div>,
    backHTML: <div className="english-side">bright, brilliant; well-known, illustrious</div>
},
{
    id: 484,
    frontHTML: <div className="greek-side">ἀπαλλάσσω, ἀπαλλάξω, ἀπήλλαξα, ἀπήλλαχα, ἀπήλλαγμαι, ἀπηλλάχθην or ἀπηλλάγην</div>,
    backHTML: <div className="english-side">set free, release, deliver</div>
},
{
    id: 485,
    frontHTML: <div className="greek-side">βουλεύω βουλεύσω, ἐβούλευσα, βεβούλευκα, βεβούλευμαι, ἐβουλεύθην</div>,
    backHTML: <div className="english-side">plan (to), decide (to); (mid.) deliberate</div>
},
{
    id: 486,
    frontHTML: <div className="greek-side">μάλα</div>,
    backHTML: <div className="english-side">very, very much</div>
},
{
    id: 487,
    frontHTML: <div className="greek-side">αἰτέω, αἰτήσω, ᾔτησα, ᾔτηκα, ᾔτημαι, ᾐτήθην</div>,
    backHTML: <div className="english-side">ask (for), beg</div>
},
{
    id: 488,
    frontHTML: <div className="greek-side">σωτηρία σωτηρίας, ἡ</div>,
    backHTML: <div className="english-side">safety, deliverance</div>
},
{
    id: 489,
    frontHTML: <div className="greek-side">ἆρα</div>,
    backHTML: <div className="english-side">[introduces a question]</div>
},
{
    id: 490,
    frontHTML: <div className="greek-side">διώκω, διώξομαι, ἐδίωξα, δεδίωχα, ἐδιώχθην</div>,
    backHTML: <div className="english-side">pursue</div>
},
{
    id: 491,
    frontHTML: <div className="greek-side">δαίμων δαίμονος, ὁ/ἡ</div>,
    backHTML: <div className="english-side">spirit, god, demon</div>
},
{
    id: 492,
    frontHTML: <div className="greek-side">οὐκοῦν</div>,
    backHTML: <div className="english-side">surely then (inviting assent to an inference)</div>
},
{
    id: 493,
    frontHTML: <div className="greek-side">γλῶσσα γλώσσης, ἡ</div>,
    backHTML: <div className="english-side">tongue; language</div>
},
{
    id: 494,
    frontHTML: <div className="greek-side">ἑπτά</div>,
    backHTML: <div className="english-side">seven</div>
},
{
    id: 495,
    frontHTML: <div className="greek-side">τολμάω, τολμήσω, ἐτόλμησα, τετόλμηκα, τετόλμημαι, ἐτολμήθην</div>,
    backHTML: <div className="english-side">have the courage, dare; undertake, undergo</div>
},
{
    id: 496,
    frontHTML: <div className="greek-side">δεσπότης –ου, ὁ</div>,
    backHTML: <div className="english-side">master (of the household); absolute ruler</div>
},
{
    id: 497,
    frontHTML: <div className="greek-side">εἰκός εἰκότος, τό</div>,
    backHTML: <div className="english-side">likelihood, probability; εἰκός (ἐστι) it is likely (+infin.) →ἔοικα</div>
},
{
    id: 498,
    frontHTML: <div className="greek-side">ἄδικος ἄδικον</div>,
    backHTML: <div className="english-side">unjust</div>
},
{
    id: 499,
    frontHTML: <div className="greek-side">εἴκοσι(ν)</div>,
    backHTML: <div className="english-side">twenty</div>
},
{
    id: 500,
    frontHTML: <div className="greek-side">μυρίος μυρία μυρίον</div>,
    backHTML: <div className="english-side">countless; μύριοι 10,000; μυριάς -άδος ἡ 10,000, a countless amount</div>
},
{
    id: 501,
    frontHTML: <div className="greek-side">αὐτίκα</div>,
    backHTML: <div className="english-side">at once, immediately</div>
},
{
    id: 502,
    frontHTML: <div className="greek-side">δέκατος –η –ον</div>,
    backHTML: <div className="english-side">tenth</div>
},
{
    id: 503,
    frontHTML: <div className="greek-side">βαίνω, βήσομαι, 2 aor. ἔβην, βέβηκα</div>,
    backHTML: <div className="english-side">walk, come, go</div>
},
{
    id: 504,
    frontHTML: <div className="greek-side">περ</div>,
    backHTML: <div className="english-side">[enclitic added to pronouns and other particles for emphasis]</div>
},
{
    id: 505,
    frontHTML: <div className="greek-side">ἐλεύθερος ἐλευθέρα ἐλεύθερον</div>,
    backHTML: <div className="english-side">free, independent</div>
},
{
    id: 506,
    frontHTML: <div className="greek-side">στρατιά –ᾶς, ἡ</div>,
    backHTML: <div className="english-side">army</div>
},
{
    id: 507,
    frontHTML: <div className="greek-side">ἀμφί</div>,
    backHTML: <div className="english-side">about, around</div>
},
{
    id: 508,
    frontHTML: <div className="greek-side">συμφορά –ᾶς, ἡ</div>,
    backHTML: <div className="english-side">event, circumstance, misfortune</div>
},
{
    id: 509,
    frontHTML: <div className="greek-side">ἑκατόν</div>,
    backHTML: <div className="english-side">hundred</div>
},
{
    id: 510,
    frontHTML: <div className="greek-side">νίκη νίκης, ἡ</div>,
    backHTML: <div className="english-side">victory</div>
},
{
    id: 511,
    frontHTML: <div className="greek-side">ἔπος ἔπους, τό</div>,
    backHTML: <div className="english-side">word, speech, tale; prophecy</div>
},
{
    id: 512,
    frontHTML: <div className="greek-side">στρατός –οῦ, ὁ</div>,
    backHTML: <div className="english-side">army</div>
},
{
    id: 513,
    frontHTML: <div className="greek-side">φράζω, φράσω, ἔφρασα, πέφρακα, πέφρασμαι, ἐφράσθην</div>,
    backHTML: <div className="english-side">tell, declare; (mid. and pass.) think (about)</div>
},
{
    id: 514,
    frontHTML: <div className="greek-side">ἀργύριον ἀργυρίου, τό</div>,
    backHTML: <div className="english-side">money</div>
},
{
    id: 515,
    frontHTML: <div className="greek-side">τριάκοντα</div>,
    backHTML: <div className="english-side">thirty</div>
},
{
    id: 516,
    frontHTML: <div className="greek-side">ἕξ</div>,
    backHTML: <div className="english-side">six</div>
},
{
    id: 517,
    frontHTML: <div className="greek-side">πεμπτός –ή –όν</div>,
    backHTML: <div className="english-side">fifth</div>
},
{
    id: 518,
    frontHTML: <div className="greek-side">μάρτυς μάρτυρος, ὁ/ἡ</div>,
    backHTML: <div className="english-side">witness</div>
},
{
    id: 519,
    frontHTML: <div className="greek-side">χαλκοῦς –ῆ –οῦν</div>,
    backHTML: <div className="english-side">of copper or bronze</div>
},
{
    id: 520,
    frontHTML: <div className="greek-side">ἕβδομος –η –ον</div>,
    backHTML: <div className="english-side">seventh</div>
},
{
    id: 521,
    frontHTML: <div className="greek-side">ποῦ</div>,
    backHTML: <div className="english-side">where</div>
},
{
    id: 522,
    frontHTML: <div className="greek-side">ναί</div>,
    backHTML: <div className="english-side">indeed, yes (used in strong affirmation)</div>
},
{
    id: 523,
    frontHTML: <div className="greek-side">φῶς φωτός, τό</div>,
    backHTML: <div className="english-side">light, daylight</div>
},
{
    id: 524,
    frontHTML: <div className="greek-side">ὀκτώ</div>,
    backHTML: <div className="english-side">eight</div>
},
{
    id: 525,
    frontHTML: <div className="greek-side">ἕκτος –η –ον</div>,
    backHTML: <div className="english-side">sixth</div>
},
{
    id: 526,
    frontHTML: <div className="greek-side">τριακοστός –ή –όν</div>,
    backHTML: <div className="english-side">thirtieth</div>
},
{
    id: 527,
    frontHTML: <div className="greek-side">ἐννέα</div>,
    backHTML: <div className="english-side">nine</div>
},
{
    id: 528,
    frontHTML: <div className="greek-side">πότε</div>,
    backHTML: <div className="english-side">when?</div>
},
{
    id: 529,
    frontHTML: <div className="greek-side">ὄγδοος –η –ον</div>,
    backHTML: <div className="english-side">eighth</div>
},
{
    id: 530,
    frontHTML: <div className="greek-side">ἔνατος –α –ον</div>,
    backHTML: <div className="english-side">ninth</div>
},
{
    id: 531,
    frontHTML: <div className="greek-side">εἰκοστός –ή –όν</div>,
    backHTML: <div className="english-side">twentieth</div>
},
{
    id: 532,
    frontHTML: <div className="greek-side">ἀγγέλλω, ἀγγελῶ, ἤγγειλα, ἤγγελκα, ἤγγελμαι, ἠγγέλθην</div>,
    backHTML: <div className="english-side">report, tell</div>
},
{
    id: 533,
    frontHTML: <div className="greek-side">ἑκατοστός –ή –όν</div>,
    backHTML: <div className="english-side">hundredth</div>
},
];
export default vocabulary;
