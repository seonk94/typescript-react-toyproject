import * as React from 'react';
import { Grid } from '@material-ui/core';
import ComparisonCard from '../components/Card/ComparisonCard';
import OfficetelInfoCard from '../components/Card/OfficetelInfoCard';

export interface Props {
    longRentCount : number,
    monthlyRentCount: number,
    expensiveMonthlyRendTransaction: OfficetelTransaction
}

function SummaryScreen({ longRentCount, monthlyRentCount, expensiveMonthlyRendTransaction}: Props) {

  return (
    <Grid container spacing={3} justify="center">
      <Grid item>
        <ComparisonCard 
          title='전세 월세 비교' 
          data1={longRentCount} 
          data2={monthlyRentCount} 
          key1='전세' 
          key2='월세' />
      </Grid>
      <Grid item>
        <OfficetelInfoCard
          title='비싼 월세 데이터'
          transaction={expensiveMonthlyRendTransaction}
        />
      </Grid>
      <Grid item>
        <OfficetelInfoCard
          title='거래량 TOP 데이터'
          transaction={expensiveMonthlyRendTransaction}
        />
      </Grid>
      <Grid item>
        <OfficetelInfoCard
          title='비싼 전세 데이터'
          transaction={expensiveMonthlyRendTransaction}
        />
      </Grid>
    </Grid>
  );
}

export default SummaryScreen;

// helpers

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }