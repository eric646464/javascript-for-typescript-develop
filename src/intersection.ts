export { };

type Pitcher1 = {
    throwingSpeed: number
}

type Batter1 = {
    battingAverage: number
}

const eric: Pitcher1 = {
    throwingSpeed: 154
}

const nino: Batter1 = {
    battingAverage: 0.367
}

//intersection使用
type TowwaitPlayer = Pitcher1 & Batter1;

const moni: TowwaitPlayer = {
    throwingSpeed: 198,
    battingAverage:0.222
}