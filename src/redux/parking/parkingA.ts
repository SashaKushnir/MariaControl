export const parkingA = {
    bookSpaceItem: (id: number) => ({type: "SET_BOOKED_ITEM", id}) as const,
    countSpaces: () => ({type: "COUNT_SPACES" }) as const,
}
