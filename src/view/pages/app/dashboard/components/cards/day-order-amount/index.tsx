import { Card, CardContent, CardHeader, CardTitle } from '@/view/components/ui/card'
import { Utensils } from 'lucide-react'

export function DayOrderAmountCard() {
  return (
    <Card>
      <CardHeader className='flex-row items-center justify-between pb-2 space-y-0'>
        <CardTitle className='text-base font-semibold'>Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className='space-y-1'>
        <span className="text-2xl font-bold tracking-tight">
          12
        </span>
        <p className="text-sm text-muted-foreground"><span className="text-rose-500 dark:text-rose-400">-4%</span> em relação a ontem</p>
      </CardContent>
    </Card>
  )
}
