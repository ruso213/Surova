import { statistic } from "../interfaces";

export function statisticsGenerator(params:number[]): statistic[]{
    const statistics :statistic[] =[]
    params.forEach(param => {
        const existingStatistic = statistics.find(i => i.statisticName == param)
        if (existingStatistic ) {
            existingStatistic.percentage++
        }else {
            statistics.push({
                statisticName: param,
                percentage: 1,
            });
        }
    })
    const total = statistics.reduce((sum, stat) => sum + stat.percentage, 0);
    const statisticsWithPercentage: statistic[] = statistics.map(stat => ({
        statisticName: stat.statisticName,
        percentage: (stat.percentage / total) * 100,
    }));
    statisticsWithPercentage.sort((a, b) => Number(a.statisticName)  - Number(b.statisticName));    
    return statisticsWithPercentage
}