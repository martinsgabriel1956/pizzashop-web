import { ChevronsLeft, ChevronsRight } from 'lucide-react'

import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/view/components/ui/pagination'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} items(s)
      </span>
      <PaginationRoot>
        <PaginationContent>
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="text-sm font-medium">
              Página {pageIndex + 1} de {totalPages}
            </div>
            <div className="flex items-center gap-2">
              <PaginationLink variant="outline" className="h-8 w-8 p-0">
                <span className="sr-only">Primeira página</span>
                <ChevronsLeft className="h-4 w-4" />
              </PaginationLink>
              <PaginationPrevious variant="outline" />
              <PaginationNext variant="outline" />
              <PaginationLink variant="outline" className="h-8 w-8 p-0">
                <span className="sr-only">Última página</span>
                <ChevronsRight className="h-4 w-4" />
              </PaginationLink>
            </div>
          </div>
        </PaginationContent>
      </PaginationRoot>
    </div>
  )
}
