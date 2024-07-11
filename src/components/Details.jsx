//import image

import village from "../assets/images/xwria.jpg";
import beach from "../assets/images/seychelles-ikaria.jpg";
import pan from "../assets/images/panigiria.jpg";
import restaurant from "../assets/images/estiatorio2.jpg";

const details = [
  {
    id: 1,
    name: "Χωριά",
    image: village,
    description:
      "Ανακαλύψτε τισ ξεχωριστές ομορφιές των χωρίων της Ικαρίασ και απολάυστε την φιλοξενία των κατοίκων.",
    path: "/xwria",
  },

  {
    id: 2,
    name: "Παραλίες",
    image: beach,
    description:
      "Απολαύστε τις ομορφιές της Ικαρίας στις οργανωμένες και μη παραλίες μας και ζήστε ονειρεμένες διακοπές.",
    path: "/paralies",
  },

  {
    id: 3,
    name: "Πανηγύρια",
    image: pan,
    description:
      "Ανακαλύψτε τα παραδοσιακά πανηγύρια της Ικαρίας και βιώστε μια μοναδική εμπειρία.",
    path: "/panigiria",
  },

  {
    id: 4,
    name: "Εστιατόρια",
    image: restaurant,
    description:
      "Εξερευνήστε τα εστιατόρια της Ικαρίας και γευτείτε μοναδικές γεύσεις .",
    path: "/estiatoria",
  },
];
export default details;
