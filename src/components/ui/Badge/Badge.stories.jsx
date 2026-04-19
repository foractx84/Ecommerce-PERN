import Badge from "./Badge";

export default {
    title: "UI/Badge",
    component: Badge,
};

export const Discount = {
    args: {
        children: "-20%",
        variant: "discount",
    },
};

export const Success = {
    args: {
        children: "NEW",
        variant: "success",
    },
};
