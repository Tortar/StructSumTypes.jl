var documenterSearchIndex = {"docs":
[{"location":"#API","page":"API","title":"API","text":"","category":"section"},{"location":"","page":"API","title":"API","text":"@sumtype\nvariant\nallvariants\nvariantof\nis_sumtype","category":"page"},{"location":"#DynamicSumTypes.@sumtype","page":"API","title":"DynamicSumTypes.@sumtype","text":"@sumtype SumTypeName(Types) [<: AbstractType]\n\nThe macro creates a sumtypes composed by the given types. It optionally accept also an abstract supertype.\n\nExample\n\njulia> using DynamicSumTypes\n\njulia> struct A x::Int end;\n\njulia> struct B end;\n\njulia> @sumtype AB(A, B)\n\n\n\n\n\n","category":"macro"},{"location":"#DynamicSumTypes.variant","page":"API","title":"DynamicSumTypes.variant","text":"variant(inst)\n\nReturns the variant enclosed in the sum type.\n\nExample\n\njulia> using DynamicSumTypes\n\njulia> struct A x::Int end;\n\njulia> struct B end;\n\njulia> @sumtype AB(A, B)\n\njulia> a = AB(A(0))\nAB'.A(0)\n\njulia> variant(a)\nA(0)\n\n\n\n\n\n","category":"function"},{"location":"#DynamicSumTypes.allvariants","page":"API","title":"DynamicSumTypes.allvariants","text":"allvariants(SumType)\n\nReturns all the enclosed variants types in the sum type in a tuple.\n\nExample\n\njulia> using DynamicSumTypes\n\njulia> struct A x::Int end;\n\njulia> struct B end;\n\njulia> @sumtype AB(A, B)\n\njulia> allvariants(AB)\n(A, B)\n\n\n\n\n\n","category":"function"},{"location":"#DynamicSumTypes.variantof","page":"API","title":"DynamicSumTypes.variantof","text":"variantof(inst)\n\nReturns the type of the variant enclosed in the sum type.\n\n\n\n\n\n","category":"function"},{"location":"#DynamicSumTypes.is_sumtype","page":"API","title":"DynamicSumTypes.is_sumtype","text":"is_sumtype(T)\n\nReturns true if the type is a sum type otherwise returns false.\n\n\n\n\n\n","category":"function"}]
}
